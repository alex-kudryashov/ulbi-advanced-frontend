import { RuleSetRule } from 'webpack';

const BabelLoader = (): RuleSetRule => ({
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    },
                ],
            ],
        },
    },
});

export default BabelLoader;
