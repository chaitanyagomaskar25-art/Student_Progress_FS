import {createBrowserRouter} from 'react-router'
import { Login } from '../components/login/Login'

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    }
])