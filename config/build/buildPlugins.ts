import webpack, {WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default (options: BuildOptions):WebpackPluginInstance[]  => {
    const { paths, isDev } = options

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: paths.html}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        isDev && new ReactRefreshPlugin()
    ].filter(Boolean)
}