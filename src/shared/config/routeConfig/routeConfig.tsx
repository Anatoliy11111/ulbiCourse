import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPages";
import {AboutPage} from "pages/AboutPages";

export enum AppRoutes {
    MAIN='main',
    ABOUT='about',
}

export const RouthPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
[AppRoutes.MAIN] : {
    path:RouthPath.main,
    element: <MainPage />
},
[AppRoutes.ABOUT]: {
    path:RouthPath.about,
    element:<AboutPage />,
}
}