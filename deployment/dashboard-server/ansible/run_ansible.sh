#!/bin/bash
ansible-playbook -i ./hosts site.yml --private-key ~/.ssh/techorrectAdmin.pem --skip-tags="seed-data" -e @secrets.yml
