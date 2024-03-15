import webpackBuild from "./build/webpackBuild"
import { Mode } from "./build/webpackType"
import path from "path"

interface VariableEnv {
    port: number,
    mode: Mode
}

export default (env: VariableEnv) => {
    return webpackBuild({
        paths: {
            src: path.resolve(__dirname, 'source', 'src'),
            html: path.resolve(__dirname, 'source', 'public', 'index.html'),
            dist: path.resolve(__dirname, 'dist'),
            index: path.resolve(__dirname, 'source', 'src', 'index.tsx')
        },
        mode: env.mode || 'development',
        port: env.port || 3000
    })
}