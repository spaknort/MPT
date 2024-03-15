import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { webpackBuildOptions } from './webpackType';
import webpackResolve from './webpackResolve';
import webpackPlugins from './webpackPlugins';
import webpackRules from './webpackRules';
import webpackDevServer from './webpackDevServer';


export default function webpackBuild (options: webpackBuildOptions): webpack.Configuration {
    const isDev = options.mode == 'development'

    return {
        entry: {
            index: options.paths.index
        },
        output: {
            path: options.paths.dist,
            filename: '[name].js',
            clean: true
        },
        mode: options.mode,
        resolve: webpackResolve(options),
        plugins: webpackPlugins(options),
        devServer: webpackDevServer(options),
        module: {
            rules: webpackRules(options)
        },
        devtool: isDev ? 'source-map': 'none',
    }
}