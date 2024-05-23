import { RuleSetRule } from 'webpack';

const FileLoader = (): RuleSetRule => ({
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
});

export default FileLoader;
