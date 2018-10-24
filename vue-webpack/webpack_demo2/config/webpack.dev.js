const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    //入口文件
    entry: {
        // 里面的main是可以修改的
        main: './src/main.js'
    },
    output: {
        //打包路径
        path: path.resolve(__dirname, '../dist'),
        //打包名字
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //css loader
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // minify:{ //是对html文件进行压缩
            //     removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
            // },
            hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/index.html' //是要打包的html模版路径和文件名称。
        })
    ],
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8888
    }
}