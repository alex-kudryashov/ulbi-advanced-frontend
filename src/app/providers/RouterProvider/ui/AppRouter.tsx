import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SuspenseFallback from 'app/components/SuspenseFallback';
import { routeConfig } from 'shared/config/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Routes>
            {
                routeConfig.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
