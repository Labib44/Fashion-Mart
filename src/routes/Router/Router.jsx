import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Login from "../../pages/Account/Login";
import SignUp from "../../pages/Account/SignUp";

const routers= createBrowserRouter([
    {
        path:'/', element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/', element:<Home></Home>
            },
            {
                path:'/shop', element:<Shop></Shop>
            },
            {
                path:'/productDetails', element:<ProductDetails></ProductDetails>
            },
        ]
    },

    {
        path:'/login', element:<Login></Login>
    },
    {
        path:'/signUp', element:<SignUp></SignUp>
    },
])

export default routers;