#!/bin/bash
set -e

cd terraform
terraform init
terraform apply -auto-approve

PUBLIC_DNS=$(terraform output instance-dns)
PRIVATE_IP=$(terraform output instance-private-ip)

cat ../ansible/hosts.template | sed 's@<public_dns>@'"$PUBLIC_DNS"'@g;s@<private_ip>@'"$PRIVATE_IP"'@g' > ../ansible/hosts

cd ../ansible

sleep 30

export ANSIBLE_HOST_KEY_CHECKING=False
ansible-playbook -i ./hosts site.yml --extra-vars "@secrets.yml"
