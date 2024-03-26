import {RuleSetRule} from "webpack";
import TypeScriptLoader from "./loaders/TypeScriptLoader";
import StyleLoader from "./loaders/StyleLoader";

export default (): RuleSetRule[] => [
    TypeScriptLoader,
    StyleLoader
]