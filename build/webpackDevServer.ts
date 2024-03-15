import webpack from 'webpack'
import { webpackBuildOptions } from './webpackType';

export default function webpackDevServer (options: webpackBuildOptions): webpack.Configuration['devServer'] {
    return {
        port: options.port,
        open: true,
        liveReload: true,
        historyApiFallback: true,
        hot: true
    }
}