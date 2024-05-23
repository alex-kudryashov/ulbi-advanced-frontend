import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavbarDarkTheme: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const NavbarLightTheme: Story = {
    args: {},
};
