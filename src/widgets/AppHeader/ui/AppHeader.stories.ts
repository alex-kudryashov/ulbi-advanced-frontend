import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { AppHeader } from 'widgets/AppHeader';

const meta = {
    title: 'widgets/AppHeader',
    // eslint-disable-next-line no-undef
    component: AppHeader,
    argTypes: {},
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AppHeaderDarkTheme: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const AppHeaderLightTheme: Story = {
    args: {},
};
