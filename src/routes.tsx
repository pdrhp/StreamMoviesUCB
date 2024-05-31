import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";
import HomePage from "./pages/main-pages/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute element={<MainPage/>} />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'admin',
                element: <div>Admin</div>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])

const Routes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default Routes;