#!/usr/bin/env sh

# abort on errors
set -e

rm -rf .nuxt/*

# build
npm run generate

# navigate into the build output directory
cd ./dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:N-eeraj/about-pokemon-black-crystal.git main:gh-pages

cd -