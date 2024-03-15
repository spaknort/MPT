import webpack from 'webpack'
import { webpackBuildOptions } from './webpackType'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export default function webpackPlugins (options: webpackBuildOptions): webpack.Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: options.paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        }),
        new ForkTsCheckerWebpackPlugin(),
        new ReactRefreshPlugin()
    ]
}