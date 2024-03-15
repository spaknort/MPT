import webpack from 'webpack'
import { webpackBuildOptions } from './webpackType'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export default function webpackRules (options: webpackBuildOptions): webpack.Configuration['module']['rules'] {
    const isDev = options.mode == 'development'

    return [
        {
            test: /\.tsx?$/,
            use: [{
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            }
            }],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.sass?$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }],
        },
        {
            test: /\.(mp3|ogg|wav)$/,
            use: 'file-loader'
        }
    ]
}
