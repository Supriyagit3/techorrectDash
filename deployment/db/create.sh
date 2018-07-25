#!/bin/bash
set -e

WORK_ROOT_DIR=$PWD
OS_TYPE="$(uname -s)"

if [[ $OS_TYPE = Darwin* ]]; then
  export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES
fi

# Create secrets.yml if it doesn't exist
if [ ! -f "$WORK_ROOT_DIR/ansible/secrets.yml" ]; then
  VAULT_ADDR=https://vault.techorrect.com:8200
  vault_token=$(cat ~/.vault-token)

  # Ensure ~/.vault-token exists
  if [ ! -f ~/.vault-token ]; then
    echo "Couldn't find ~/.vault-token!"
    exit
  fi

  cd "$WORK_ROOT_DIR"/ansible

  echo 'Verifying token...'
  # Verify token.  Because set -e was set, the following command will exit the program if it doesn't pass
  curl -sS \
    --header "X-Vault-Token: $vault_token" \
    --request POST \
    --data "{\"token\":\"$vault_token\"}" \
    -o /dev/null \
    --fail \
    "${VAULT_ADDR}"/v1/auth/token/lookup
  echo 'Token verified!'

  # Get ansible role_id
  curl -sS \
    --header "X-Vault-Token: $vault_token" \
    --request GET \
    --fail \
    "${VAULT_ADDR}"/v1/auth/approle/role/ansible/role-id | jq -r '"vaultRoleId: \"\(.data.role_id)\""' > secrets.yml
  # Generate new secret_id for ansible role_id
  curl -sS \
    --header "X-Vault-Token: $vault_token" \
    --request POST \
    --data '{"metadata": "{\"Comments\": \"generated by techorrectDash/deployment/db ansible scripts\"}" }' \
    --fail \
    "${VAULT_ADDR}"/v1/auth/approle/role/ansible/secret-id | jq -r '"vaultSecretId: \"\(.data.secret_id)\"\nvaultSecretIdAcessor: \"\(.data.secret_id_accessor)\""' >> secrets.yml
fi


cd "$WORK_ROOT_DIR"/terraform
terraform init
terraform apply -auto-approve

PUBLIC_DNS=$(terraform output instance-dns)
PRIVATE_IP=$(terraform output instance-private-ip)

cat "$WORK_ROOT_DIR"/ansible/hosts.template | sed 's@<public_dns>@'"$PUBLIC_DNS"'@g;s@<private_ip>@'"$PRIVATE_IP"'@g' > "$WORK_ROOT_DIR"/ansible/hosts

cd "$WORK_ROOT_DIR"/ansible

sleep 30

ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i ./hosts site.yml --extra-vars @secrets.yml
