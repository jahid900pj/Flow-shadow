import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Pages/Form/Login/Login";
import Register from "../../Components/Pages/Form/Register/Register";
import Home from "../../Components/Pages/Home/Home/Home";
import PostCards from "../../Components/Pages/Media/PostCards/PostCards";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/media', element: <PostCards></PostCards>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/login', element: <Login></Login>
            }
        ]
    }
])