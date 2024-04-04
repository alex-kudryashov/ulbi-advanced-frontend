import {RuleSetRule} from "webpack";
import TypeScriptLoader from "./loaders/TypeScriptLoader";
import StyleLoader from "./loaders/StyleLoader";
import {BuildOptions} from "./types/config";
import SVGLoader from "./loaders/SVGLoader";
import FileLoader from "./loaders/FileLoader";

export default (options: BuildOptions): RuleSetRule[] => [
    TypeScriptLoader,
    StyleLoader(options),
    SVGLoader(options),
    FileLoader(options)
]