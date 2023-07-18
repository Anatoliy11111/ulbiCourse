import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPages';
import { AboutPage } from 'pages/AboutPages';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN='main',
    ABOUT='about',
    NOT_FOUND = 'not_found'
}

export const RouthPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouthPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouthPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouthPath.not_found,
        element: <NotFoundPage />,
    },
};
