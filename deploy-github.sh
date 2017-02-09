#!/usr/bin/env bash

set -ex
cd "$(dirname "$0")"

remote=$(git config remote.origin.url)
cd ~
git config --global user.email bot@circleci.com > /dev/null 2>&1
git config --global user.name CircleCI > /dev/null 2>&1
git clone $remote

git checkout master
git merge develop
yarn install
yarn run build
git commit -am "Deploy to GitHub pages"
git push