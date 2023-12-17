import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorpage from "./pages/Errorpage";
import Allfood from "./components/Allfood/Allfood";
import Blog from "./components/Blog/Blog";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/allfood',
                element: <Allfood></Allfood>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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