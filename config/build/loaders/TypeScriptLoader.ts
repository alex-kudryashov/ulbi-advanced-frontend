import {RuleSetRule} from "webpack";

const TypeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

export default TypeScriptLoader