#!/usr/bin/env bash

set -ex
cd "$(dirname "$0")"

git merge develop
yarn install
yarn run build
git commit -am "Deploy to GitHub pages"
git push