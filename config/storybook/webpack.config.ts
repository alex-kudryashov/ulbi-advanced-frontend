import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import StyleLoader from '../build/loaders/StyleLoader';
import SVGLoader from '../build/loaders/SVGLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(SVGLoader());
    config.module.rules.push(StyleLoader(true));

    config.resolve.alias = {
        entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
    };

    return config;
};
