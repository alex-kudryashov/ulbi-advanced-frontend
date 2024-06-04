import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from 'shared/ui/Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)],
};
