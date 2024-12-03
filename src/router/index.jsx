// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/login";
import NotFound from '../views/NotFound';
const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
    }
])

export default router