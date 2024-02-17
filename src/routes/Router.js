import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import PrivateRoute from './PrivateRoute';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Devices = Loadable(lazy(() => import('../views/devices/devices')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Users = Loadable(lazy(() => import('../views/users/users')));


const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <PrivateRoute element={Devices} /> },
      { path: '/devices', exact: true, element: <PrivateRoute element={Devices} /> },
      { path: '/sell-devices', exact: true, element: <PrivateRoute element={SamplePage} /> },
      { path: '/users', exact: true, element: <PrivateRoute element={Users} /> },
      { path: '/icons', exact: true, element: <PrivateRoute element={Icons} /> },
      { path: '/ui/typography', exact: true, element: <PrivateRoute element={TypographyPage} /> },
      { path: '/ui/shadow', exact: true, element: <PrivateRoute element={Shadow} /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
