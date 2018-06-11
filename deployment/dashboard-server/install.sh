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

sudo mv techorrect_dashboard_backend.service /etc/systemd/system/techorrect_dashboard_backend.service
chmod +x start_backend.sh
mv start_backend.sh dashboard/dashboard-server/
mv config.json dashboard/dashboard-server/
cd dashboard/dashboard-server
npm install
sudo systemctl enable techorrect_dashboard_backend.service
sudo systemctl start techorrect_dashboard_backend.service
