import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('sidebar render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    test('toggle sidebar', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        fireEvent.click(toggleButton);
        expect(sidebar).toHaveClass('Collapsed');
        screen.debug();
    });
});
