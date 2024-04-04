import {RuleSetRule} from "webpack";
import {BuildOptions} from "../types/config";

const SVGLoader = (options: BuildOptions): RuleSetRule => {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
}

export default SVGLoader