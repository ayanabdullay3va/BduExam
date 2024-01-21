import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../../components/home";
import Add from "./../Admin/add"
import Wishlist from "../Wish/wishlist";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/wish",
        element: <Wishlist />,
    },
    {
        path: "/add",
        element: <Add />,
    },
]);