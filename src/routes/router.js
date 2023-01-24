import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "../components/Login";
import Landing from "../components/Landing";
import Form from "../components/Form";
import Panel from "../components/Panel";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: 'form',
                element: <Form />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'panel',
                element: <Panel />
            }
        ]
    }
])