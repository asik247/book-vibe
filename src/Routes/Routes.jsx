import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Books from "../Components/Books/Books";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import WishListBooks from "../Components/WishListBooks/WishListBooks";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/promise.json'),
                Component: Home
            },
            { path: '/books', Component: Books },

            {
                path: "details/:id",
                loader: async ({ params }) => {
                    const res = await fetch('/promise.json')
                    const data = await res.json();
                    // console.log(data);
                    const singleBook = data.find(book => book.bookId === parseInt(params.id));
                    // console.log(singleBook);
                    return singleBook
                },
                Component: DetailsPage
            },
            {
                path: "wishListBooks",
                loader: () => fetch('/promise.json'),
                Component: WishListBooks
            }
        ]

    }
])
export default router;