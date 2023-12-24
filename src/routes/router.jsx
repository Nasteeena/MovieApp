import { createBrowserRouter } from 'react-router-dom';

import {ROUTE} from '../utils/constants/routerConstants';

import RelocateToPage from '../utils/helpers/RelocateToPage';

import Main from '../layout/Main/Main';
import Auth from '../layout/Auth/Auth';
import Login from '../containers/pages/Login/Login';
import Register from '../containers/pages/Register/Register';
import NotFoundPage from '../containers/pages/NotFound/NotFound';
import MainPage from '../containers/pages/MainPage/MainPage';
import FilmDetails from '../containers/pages/FilmDetails/FilmDetails';

export const router = createBrowserRouter([
    {
        path: ROUTE.MAIN,
        element: <RelocateToPage> <Main /> </RelocateToPage>,
        children: [
            {
                path: ROUTE.MAIN,
                element: <MainPage />
            },

            {
                path: ROUTE.MOVIE,
                element: <FilmDetails />
            }
        ]
    },

    {
        path: ROUTE.AUTH,
        element: <Auth />,
        children: [
            {
                path: ROUTE.LOGIN,
                element: <Login />
            },

            {
                path: ROUTE.REGISTER,
                element: <Register />
            }
        ]
    },

    {
        path: ROUTE.NOT_FOUND,
        element: <NotFoundPage />
    }
]);