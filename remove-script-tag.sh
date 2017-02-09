#!/usr/bin/env bash

set -ex

cd "$(dirname "$0")"

sed -i "" 's:<script.*</script>::g' 404/index.html || sed -i 's:<script.*</script>::g' 404/index.html
