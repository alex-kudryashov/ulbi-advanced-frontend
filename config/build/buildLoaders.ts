import { RuleSetRule } from 'webpack';
import TypeScriptLoader from './loaders/TypeScriptLoader';
import StyleLoader from './loaders/StyleLoader';
import { BuildOptions } from './types/config';
import SVGLoader from './loaders/SVGLoader';
import FileLoader from './loaders/FileLoader';
import BabelLoader from './loaders/BabelLoader';

export default (options: BuildOptions): RuleSetRule[] => [
    FileLoader(),
    SVGLoader(),
    BabelLoader(),
    TypeScriptLoader,
    StyleLoader(options.isDev),
];
