import {RuleSetRule} from "webpack";
import {BuildOptions} from "../types/config";

const SVGLoader = (options: BuildOptions): RuleSetRule => {
    return {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
}

export default SVGLoader