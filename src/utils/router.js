import { createBrowserRouter } from "react-router-dom";
import { Main } from "../page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    }
])