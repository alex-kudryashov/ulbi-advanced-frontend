import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('button with text only', () => {
        render(<Button>Hello</Button>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    test('button with theme clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Hello</Button>);
        expect(screen.getByText('Hello')).toHaveClass('Clear');
        screen.debug();
    });
});
