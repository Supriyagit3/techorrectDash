#!/bin/bash
set -e

WORK_ROOT_DIR=$PWD
cd $WORK_ROOT_DIR/terraform
terraform apply -auto-approve

PUBLIC_DNS=$(terraform output instance-dns)

cat $WORK_ROOT_DIR/ansible/hosts.template | sed 's@<public_dns>@'"$PUBLIC_DNS"'@g' > $WORK_ROOT_DIR/ansible/hosts

cd $WORK_ROOT_DIR/ansible

ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i ./hosts site.yml -e @secrets.yml
