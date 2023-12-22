import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorpage from "./pages/Errorpage";
import Allfood from "./components/Allfood/Allfood";
import Blog from "./components/Blog/Blog";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./Providers/PrivateRoutes";
import Home from "./components/Home/Home";
import SingleFood from "./components/SingleFood/SingleFood";
import Foodpurchase from "./components/Foodpurchase/Foodpurchase";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allfood',
                element: <Allfood></Allfood>,
                // loader: () => fetch('http://localhost:5000/api/v1/route/getallfood')
            },
            {
                path: '/allfood/singlefood/:id',
                element: <SingleFood></SingleFood>,
                loader: ({params}) => fetch(`http://localhost:5000/api/v1/route/getallfood/singlefood/${params.id}`)
            },
            {
                path: '/foodpurchase/fooditem/:id',
                element: <PrivateRoutes> <Foodpurchase></Foodpurchase></PrivateRoutes>,
                loader: ({params}) =>fetch(`http://localhost:5000/api/v1/route/getallfood/fooditem/${params.id}`)
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/registration',
        element: <RegistrationPage></RegistrationPage>
    },
])
export default Routes;