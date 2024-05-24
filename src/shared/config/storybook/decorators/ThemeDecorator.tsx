import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={Theme.Light}>
        <div className={`app ${theme}`}><Story /></div>
    </ThemeProvider>
);
