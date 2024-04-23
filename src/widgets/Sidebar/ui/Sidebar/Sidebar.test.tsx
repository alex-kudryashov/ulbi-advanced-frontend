import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        fireEvent.click(toggleButton);
        expect(sidebar).toHaveClass('Collapsed');
        screen.debug();
    });
});
