<<<<<<< HEAD
# webpack 知识


### 什么是WebPack？


>WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。在3.0出现后，Webpack还肩负起了优化项目的责任。

这段话有三个重点：

打包：可以把多个Javascript文件打包成一个文件，减少服务器压力和下载带宽。

转换：把拓展语言转换成为普通的JavaScript，让浏览器顺利运行。

优化：前端变的越来越复杂后，性能也会遇到问题，而WebPack也开始肩负起了优化和提升性能的责任。

## 安装:

```cmd
mkdir webpack_demo
cd webpack_demo
//全局安装
npm install -g webpack
```
在命令行输入：

```
npm n init
```
输入下面命令进行项目目录的安装：

```
npm install --save-dev webpack
```

手动创建 src 和 dist文件夹

- src文件夹：用来存放我们编写的javascript代码，可以简单的理解为用JavaScript编写的模块。
- dist文件夹：用来存放供浏览器读取的文件，这个是webpack打包成的文件。

# 第一次Webpack打包


参考 :[webpack4.x入门配置](https://www.jianshu.com/p/6712e4e4b8fe)
=======
# webpack 知识:

>>>>>>> 74e281f116a538d1a601c245aaa2c2400acd04fa
