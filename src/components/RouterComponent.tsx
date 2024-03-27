import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import AboutViewLazy from "../views/about/AboutView.lazy";
import HomeViewLazy from "../views/home/HomeView.lazy";
import SuspenseFallback from "./SuspenseFallback";

const RouterComponent = () => {

    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Routes>
                <Route path={'/'} element={<HomeViewLazy />} />
                <Route path={'/about'} element={<AboutViewLazy />} />
            </Routes>
        </Suspense>
    );
};

export default RouterComponent;