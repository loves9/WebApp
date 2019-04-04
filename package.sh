#!/bin/bash

# 获取工程名称和路径
project_path=$(cd `dirname $0`; pwd)
project_name="${project_path##*/}"
echo $project_path
echo $project_name

# 检查是否有dist文件夹
if [ ! -d "./dist" ];then
echo "dist文件夹不存在，您可能需要先执行npm run build"
fi

# 复制文件 plugin.properties 文件到dist目录，如果文件存在会覆盖
cp ./config/plugin.properties ./dist
# 复制文件 config.properties 文件到dist/www目录，如果文件存在会覆盖
cp ./config/config.properties ./dist/www

# 压缩成zip并copy到output目录
zip -r ${project_name}.zip ./dist
cp -r ${project_name}.zip ./build/output

# 删除原包
rm ./${project_name}.zip