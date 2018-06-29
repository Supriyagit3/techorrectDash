#!/bin/bash

# This script is only used in development to help with debugging

WORK_ROOT_DIR=$PWD

cd $WORK_ROOT_DIR/ansible
ansible-playbook -i ./hosts site.yml --tags="seed-data" -e @secrets.yml
