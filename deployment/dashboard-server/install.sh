#!/bin/bash

exec > /home/ubuntu/install.log 2>&1
set -x

curl -sS -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# source /home/ubuntu/.bashrc
# chmod u+x .nvm/nvm.sh
# /home/ubuntu/.nvm/nvm.sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install 9.11.1

tar -xzf dash.tar.gz

mv config.json dashboard/dashboard-server
cd dashboard/dashboard-server
npm install
npm start   # needs config.json configured properly

# sudo apt install unzip
# 
# cd /var/lib/vault
# # download and install Vault https://www.vaultproject.io/docs/install/index.html#precompiled-binaries
# curl -v -L https://releases.hashicorp.com/vault/0.9.6/vault_0.9.6_linux_amd64.zip -o vault.zip
# unzip vault.zip
# rm vault.zip
# chmod +x vault
# sudo mv vault /usr/local/bin/vault
# 
# sudo systemctl enable vault.service
# sudo systemctl start vault.service
