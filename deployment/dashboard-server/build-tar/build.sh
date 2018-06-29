#!/bin/bash

WORK_DIR=$PWD
DASH_REPO_DIR=$WORK_DIR/techorrect-dash-repo
OUTPUT_DIR=$WORK_DIR/dash-deploy-tar
TAR_DIR=$OUTPUT_DIR/dashboard

# Create all necessary output dirs
mkdir -p $TAR_DIR

# Move backend server code to results folder
mv $WORK_DIR/dashboard-server $TAR_DIR

# Install necessary front-end build tools
cd $DASH_REPO_DIR/gui
npm install bower
npm install gulp

# Build minified front-end files
node_modules/.bin/bower install --allow-root
node_modules/.bin/gulp

# Move minified front-end files to results folder
mv $DASH_REPO_DIR/gui/dist $TAR_DIR

# Build archive
cd $OUTPUT_DIR
tar -czf dash-v$(cat $WORK_DIR/version).tar.gz dashboard
