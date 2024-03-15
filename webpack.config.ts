import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

type Mode = 'production' | 'development'

interface VariablesEnv {
    mode: Mode,
    port: number
}

export default (env: VariablesEnv) => {
    const config: webpack.Configuration = {
        mode: env.mode || 'development',
        entry: {
            index: path.resolve(__dirname, 'source', 'src', 'index.tsx')
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'source', 'public', 'index.html')
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[name].css'
            })
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.sass', '.css']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options:{
                        presets:["@babel/preset-react"]
                    }
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.sass$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                    exclude: /node_modules/
                },
            ]
        },
        devServer: {
            port: env.port || 3000,
            open: false,
            liveReload: true,
        }
    }

    return config
}