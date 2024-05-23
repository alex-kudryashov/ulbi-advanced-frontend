import type { Preview } from '@storybook/react';
import { StyleDecorator, ThemeDecorator, RouterDecorator } from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        RouterDecorator,
        StyleDecorator,
        ThemeDecorator(Theme.Light),
    ],
};

export default preview;
