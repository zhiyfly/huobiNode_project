# huobiNode_project
重构火币网数字货币监控系统
### 说明：
__nodeJs 版本：v9.6.1__，
__npm 版本：5.6.0__，
__pm2 版本： 2.9.1__
### 下载
```git clone git@github.com:425324438/huobiNode_project.git```
### 初始化
```npm i ```
### 必要的修改
1.  项目根目录下的 /job/resource/userEmail **清空此文件**

   
2. 需安装**pm2** 管理项目
否则：请自行修改**package.json** 这里是修改启动命令的，具体怎么修改[Google](https://www.google.com/ )。
```
 "scripts": {
    "start": "pm2 start ./bin/www --name huobiNode_project"
  } 
```
3. 配置
在email目录下面添加config.js文件，配置邮箱，config.js文件参考如下：
```
module.exports = {
    //邮件配置
 email: {
     service: 'QQ',
     user: 'xxxxx@qq.com',
     pass: 'xxxxx', //授权码，具体请google
 }
}
```
在job目录下添加hbconfig.js文件，配置huobiapi的access_key和secretkey，hbconfig.js文件参考如下：
```
module.exports = {
    hbconfig : {
        access_key : 'xxxxx',
        secretkey : 'xxxxx'
    }
}
```

启动命令：`npm start`
