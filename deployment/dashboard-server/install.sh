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

# Install expressjs backend (port 3000)
sudo mv techorrect_dashboard_backend.service /etc/systemd/system/techorrect_dashboard_backend.service
chmod +x start_backend.sh
mv start_backend.sh dashboard/dashboard-server/
mv config.json dashboard/dashboard-server/
cd dashboard/dashboard-server
npm install
sudo systemctl enable techorrect_dashboard_backend.service
sudo systemctl start techorrect_dashboard_backend.service

# https://www.nginx.com/blog/setting-up-nginx/
echo "deb http://nginx.org/packages/ubuntu xenial nginx" | sudo tee --append /etc/apt/sources.list
echo "deb-src http://nginx.org/packages/ubuntu xenial nginx" | sudo tee --append /etc/apt/sources.list
cd /home/ubuntu
sudo wget http://nginx.org/keys/nginx_signing.key
sudo apt-key add nginx_signing.key
sudo apt-get update
sudo apt-get install nginx
sudo rm -rf /usr/share/nginx/html/*

# Install angular 
cd /home/ubuntu/dashboard/gui
npm install
npm install -g bower
npm install --global gulp-cli
bower install
gulp usemin # builds the dist/ output folder.  this will return a gulp-notify error, which can be ignored
sudo mv dist/* /usr/share/nginx/html

sudo systemctl start nginx.service
