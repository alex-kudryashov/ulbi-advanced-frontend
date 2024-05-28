import { Suspense } from 'react';

import { AppRouter } from 'app/providers/RouterProvider';
import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib';

const App = () => (
    <div className={classNames('app', {})}>
        <Suspense fallback="">
            <AppHeader />

            <div className="app-content">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
