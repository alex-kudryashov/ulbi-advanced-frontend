import { RuleSetRule } from 'webpack';

const SVGLoader = (): RuleSetRule => ({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
});

export default SVGLoader;
