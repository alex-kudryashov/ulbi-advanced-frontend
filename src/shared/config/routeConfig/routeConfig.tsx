import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { AboutPage } from 'pages/about';
import { NotFoundPage } from 'pages/notFoundPage';

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths.home,
        element: <HomePage />,
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
];
