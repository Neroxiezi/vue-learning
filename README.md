# vue-learning
vue基础学习

# vue-cli 

vue-cli 是一个 vue的脚手架工具 是一个node 包



# 项目目录结构:

```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
```

packgae.json 解析:

```
    scripts字段，这个字段定义了你可以用npm运行的命令
    
    dependencies字段指项目运行时所依赖的模块；
    
    devDependencies字段指定了项目开发时所依赖的模块；

```

### webpack 学习

- 初始化package.json

```
cnpm init -y

```

- 安装 webpack 

```
 cnpm install webpack webpack-cli -D

```

### webpack info

#### 在webpack 中 所有的文件都是模块

- js模块 模块化(AMD CMD  es6Models)

### 允许直接执行webpack 

