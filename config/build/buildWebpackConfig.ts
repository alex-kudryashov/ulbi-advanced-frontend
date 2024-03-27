import {BuildOptions} from "./types/config";
import webpack from "webpack";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export default (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev} = options

    return {
        mode,
        entry: {
            main: paths.entry
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}