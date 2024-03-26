import webpack, {WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

export default (options: BuildOptions):WebpackPluginInstance[]  => {
    const { paths } = options

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: paths.html}),
    ]
}