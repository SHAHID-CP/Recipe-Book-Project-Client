import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Components/Home/Home";
import ErrorRoute from "../Components/ErrorRoute";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Allrecipe from "../Components/Allrecipe";
import Addrecipe from "../Components/Addrecipe";
import Myrecipe from "../Components/Myrecipe";
import PrivateRoute from "../Components/PrivateRoute";
import DetailsRecipe from "../Components/DetailsRecipe";
import LoadingEle from "../Components/LoadingEle";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/allrecipe',
                hydrateFallbackElement: <LoadingEle></LoadingEle>,
                loader: ()=> fetch('http://localhost:3000/recipe'),
                element: <Allrecipe></Allrecipe>,
            },
            {
                path: '/addrecipe',
                element: <PrivateRoute><Addrecipe></Addrecipe></PrivateRoute>,
            },
            {
                path: '/myrecipes',
                element: <PrivateRoute><Myrecipe></Myrecipe></PrivateRoute>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path:'/details',
                element: <PrivateRoute><DetailsRecipe></DetailsRecipe></PrivateRoute>,
            }

        ]
    },
])

export default router