#!/bin/sh
# Move builds from vue and react folders and copy index.html to pages

set -xe

rm -rf pages
mkdir pages
mv react/build pages/react
mv vue/dist pages/vue
cp index.html pages/index.html
