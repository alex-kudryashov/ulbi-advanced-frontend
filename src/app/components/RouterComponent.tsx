import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import SuspenseFallback from "./SuspenseFallback";
import {AboutView} from "pages/about";
import {HomeView} from "pages/home";

const RouterComponent = () => {

    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Routes>
                <Route path={'/'} element={<HomeView />} />
                <Route path={'/about'} element={<AboutView />} />
            </Routes>
        </Suspense>
    );
};

export default RouterComponent;