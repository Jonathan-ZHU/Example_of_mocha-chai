# 简介
本程序用于测试学习mocha和chai模块，给出了post/get/mocha/chai应用范例
# 学习步骤
## 安装 mocha
mocha模块需要全局安装，因为我们需要在shell中用到mocha这个命令
```bash
$ npm install -g mocha@2.3.1
```
## 安装 chai
chai作为测试环境依赖模块安装，顺便安装chai-http来模拟http请求
```bash
npm install chai@3.2.0 chai-http@1.0.0 --save-dev
```

## 安装vue
安装vue客户端命令行工具

```bash
npm install -g vue-cli
```
创建vue项目

```bash
vue init webpack APPNAME
```

使用http的get/post请求
```bash
npm install vue-resource --save
```
jsonplaceholder.typicode.com

路由优化模块
```bash
npm install vue-router --save
```
