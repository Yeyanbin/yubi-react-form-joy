#!/usr/bin/env sh

# 忽略错误
set -e

rm -rf out
# 构建
npm run build
npm run export

# 进入待发布的目录
cd ./out

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

touch .nojekyll

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Yeyanbin/yubi-react-schema-form.git master:gh-pages
# git push -f git@github.com:Yeyanbin/yubi-blog.git master:gh-pages

# cd -