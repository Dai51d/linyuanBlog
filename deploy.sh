# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '初始化'
#提交代码
git remote add origin https://gitee.com/linyuanstudy/dai-blog.git
git push -u origin "master"
cd -