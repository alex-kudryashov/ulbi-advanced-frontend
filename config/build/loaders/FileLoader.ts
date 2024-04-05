import { RuleSetRule } from 'webpack';

const SVGLoader = (): RuleSetRule => ({
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
});

export default SVGLoader;
