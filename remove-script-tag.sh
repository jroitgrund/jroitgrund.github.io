#!/usr/bin/env bash

set -ex

cd "$(dirname "$0")"

sed --in-place="" 's:<script.*</script>::g' index.html
