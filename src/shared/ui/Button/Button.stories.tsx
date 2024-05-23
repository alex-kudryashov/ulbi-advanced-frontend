import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: ThemeButton.PRIMARY,
        children: 'Primary',
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const Secondary: Story = {
    args: {
        theme: ThemeButton.SECONDARY,
        children: 'Secondary',
    },
};
