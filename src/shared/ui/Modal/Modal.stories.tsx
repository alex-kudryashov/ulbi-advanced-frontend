import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Modal } from 'shared/ui/Modal';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenModal: Story = {
    args: {
        children: 'Modal content',
        isOpen: true,
        onClose: () => {},
        lazy: false,
    },
};

export const OpenModalDarkTheme: Story = {
    args: {
        children: 'Modal content',
        isOpen: true,
        onClose: () => {},
        lazy: false,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const OpenModalLazy: Story = {
    args: {
        children: 'Modal content',
        isOpen: true,
        onClose: () => {},
        lazy: true,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const ClosedModalLazy: Story = {
    args: {
        children: 'Modal content',
        isOpen: false,
        onClose: () => {},
        lazy: true,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
