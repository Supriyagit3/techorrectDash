#!/bin/bash

cd terraform
yes yes | terraform apply

PUBLIC_DNS=$(terraform output instance-dns)

cat ../ansible/hosts.template | sed 's@<public_dns>@'"$PUBLIC_DNS"'@g' > ../ansible/hosts

cd ../ansible

yes yes | ansible-playbook -i ./hosts site.yml
