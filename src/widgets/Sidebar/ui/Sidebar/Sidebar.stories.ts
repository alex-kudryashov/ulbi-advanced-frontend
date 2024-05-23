import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarDarkTheme: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const SidebarLightTheme: Story = {
    args: {},
};
