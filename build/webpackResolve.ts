import webpack from 'webpack'
import { webpackBuildOptions } from './webpackType'

export default function webpackResolve (options: webpackBuildOptions): webpack.Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js', '.sass', '.png', '.jpg', '.svg'],
        alias: {
            '@': options.paths.src
        }
    }
}