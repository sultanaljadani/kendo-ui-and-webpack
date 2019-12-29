var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/scripts.js',
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: 'bundle.js' 
        },
        plugins: [new HtmlWebpackPlugin({
            template:'./src/app/template.html'
        })],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['css-loader']
                }
            ]
        },
       /*exampole for loaders
        module: {
            rules:[
                {test: /\.test$/, use: 'raw-loader'}
            ]
        },*/
        //this mode for developer, req
    mode: 'development'
    //mode: 'production'
};
/* module.exports = {
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    //style loader 
                    {loader: 'css-loader',},
                    //css loader
                    {
                        loader: 'css-loader',
                        option:{
                            modules: true
                        }
                    },
                    { loader: 'css-loader'}
                ]
            }
        ]
    }
};*/ //exampole for loader