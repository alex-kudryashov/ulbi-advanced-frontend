import {RouteProps} from "react-router-dom";
import {HomeView} from "pages/home";
import {AboutView} from "pages/about";

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths.home,
        element: <HomeView />
    },
    {
        path: RoutePaths.about,
        element: <AboutView />
    },
]