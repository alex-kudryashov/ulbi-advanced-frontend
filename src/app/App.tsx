import { AppRouter } from 'app/providers/RouterProvider';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';

import './styles/index.scss';
import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <AppHeader />
                <div className="app-content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
