import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorpage from "./pages/Errorpage";
import Allfood from "./components/Allfood/Allfood";
import Blog from "./components/Blog/Blog";

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
            }
        ]
    }
])
export default Routes;