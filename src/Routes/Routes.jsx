import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppsDetail from "../Pages/AppsDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path:'/apps',
                element:<Apps></Apps>,
            },
            {
                path:'/installation',
                element:<Installation></Installation>,
            },
            {
                path:'/product/:id',
                element:<AppsDetail></AppsDetail>,
            },
        ],
    },
])

export default router