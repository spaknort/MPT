export type Mode = 'development' | 'production'

export interface webpackBuildPaths {
    html: string,
    src: string,
    dist: string,
    index: string
}

export interface webpackBuildOptions {
    port: number,
    mode: Mode,
    paths: webpackBuildPaths
}