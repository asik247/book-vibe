import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Books from "../Components/Books/Books";
import DetailsPage from "../Components/DetailsPage/DetailsPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true,
            loader: () => fetch('/promise.json'),
            Component: Home },
            { path: '/books', Component: Books },

            {
                path:"details/:id",
                Component:DetailsPage
            }
        ]

    }
])
export default router;