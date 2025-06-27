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
import DashboardLayout from "../Components/Pages/DashboardLayout";
import Statistics from "../Components/Pages/Statistics";
import Allrecipiess from "../Components/Allrecipiess";
import AboutUs from "../Components/About";
import Contact from "../Components/Contact";
import Support from "../Components/Support";
import RecipeDetailss from "../Components/DetailsRecipess";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                index: true,
                hydrateFallbackElement: <LoadingEle></LoadingEle>,
                loader: ()=> fetch('https://my-recipe-server-nine.vercel.app/recipe/sort'),
                element: <Home></Home>,
            },
            {
                path: '/allrecipe',
                hydrateFallbackElement: <LoadingEle></LoadingEle>,
                loader: ()=> fetch('https://my-recipe-server-nine.vercel.app/recipe'),
                element: <Allrecipe></Allrecipe>,
            },
            {
            path:'/details/:id',
            hydrateFallbackElement: <LoadingEle></LoadingEle>,
            loader: ({params})=> fetch(`https://my-recipe-server-nine.vercel.app/recipe/${params.id}`),
            element: <PrivateRoute><RecipeDetailss></RecipeDetailss></PrivateRoute>,
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
                path: '/about',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/support',
                element: <Support></Support>,
            },
            

        ]
    },
    {
        path: '/dashboard',
        element: (
        <PrivateRoute>
        <DashboardLayout />
        </PrivateRoute>
        ),
        children: [
        {
            index: true,
            hydrateFallbackElement: <LoadingEle></LoadingEle>,
            loader: ()=> fetch('https://my-recipe-server-nine.vercel.app/recipe'),
            element: (
            <PrivateRoute>
            <Statistics />
            </PrivateRoute>
        ),
        },
        {
            path: 'addrecipe',
            element: <PrivateRoute><Addrecipe></Addrecipe></PrivateRoute>,
        },
        {
            path: 'myrecipes',
            element: <PrivateRoute><Myrecipe></Myrecipe></PrivateRoute>,
        },
        {
            path: 'allrecipes',
            hydrateFallbackElement: <LoadingEle></LoadingEle>,
            loader: ()=> fetch('https://my-recipe-server-nine.vercel.app/recipe'),
            element: <Allrecipiess></Allrecipiess>,
        },
        
    ],
    },
])

export default router