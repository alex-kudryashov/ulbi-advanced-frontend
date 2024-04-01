import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import SuspenseFallback from "../../../components/SuspenseFallback";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Routes>
                {
                    routeConfig.map(({element, path}) => (
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
};