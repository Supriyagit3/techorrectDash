#!/bin/bash

cd terraform
yes yes | terraform apply

PUBLIC_DNS=$(terraform output instance-dns)
PRIVATE_IP=$(terraform output instance-private-ip)

cat ../ansible/hosts.template | sed 's@<public_dns>@'"$PUBLIC_DNS"'@g;s@<private_ip>@'"$PRIVATE_IP"'@g' > ../ansible/hosts

cd ../ansible

yes yes | ansible-playbook -i ./hosts site.yml --extra-vars "@secrets.yaml"
