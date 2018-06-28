#!/bin/bash
ansible-playbook -i ./hosts site.yml --private-key ~/.ssh/techorrectAdmin.pem
