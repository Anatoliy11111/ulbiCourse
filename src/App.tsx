import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './styles/index.scss'
import MainPageAsync from "./pages/MainPages/MainPageAsync";
import AboutPageAsync from "./pages/AboutPages/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



export const App = () => {
const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to = {'/'}>Главная</Link>
            <Link to = {'/about'}>О сайте</Link>
            <button onClick={toggleTheme}>theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                    <Routes>

                            <Route path={'/about'} element={<AboutPageAsync />}/>
                              <Route path={'/'} element={<MainPageAsync/>}/>
                     </Routes>
                </Suspense>
        </div>
    );
};
