import {RuleSetRule} from "webpack";
import TypeScriptLoader from "./loaders/TypeScriptLoader";
import StyleLoader from "./loaders/StyleLoader";
import {BuildOptions} from "./types/config";

export default (options: BuildOptions): RuleSetRule[] => [
    TypeScriptLoader,
    StyleLoader(options)
]