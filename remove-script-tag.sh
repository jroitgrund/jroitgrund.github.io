#!/usr/bin/env bash

set -ex

cd "$(dirname "$0")"

sed -i "" 's:<script.*</script>::g' build/index.html