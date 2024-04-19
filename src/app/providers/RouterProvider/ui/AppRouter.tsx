import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

export const AppRouter = () => (
    <Routes>
        {
            routeConfig.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            <Suspense fallback={<PageLoader />}>
                                {element}
                            </Suspense>
                        </div>

                    )}
                />
            ))
        }
    </Routes>
);
