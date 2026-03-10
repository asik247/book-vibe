import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Books from "../Components/Books/Books";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true,
            loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
            Component: Home },
            { path: '/books', Component: Books }


        ]

    }
])
export default router;