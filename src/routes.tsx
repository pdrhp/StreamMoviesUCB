import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute element={<HomePage/>} />
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