import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])