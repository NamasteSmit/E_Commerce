import { root } from "postcss";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Description from "./components/Description";
import UserContext from "./utils/context";
import useProduct from "./utils/useProduct";
import store from "./utils/Store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";


const App = ()=>{

    const {productItems,setProductItems,filterProducts,setFilterProducts}=useProduct();
   
    return (
        <Provider store={store}>
        <UserContext.Provider value={{
            productItems: productItems,
            setProductItems: setProductItems,
            filterProducts:filterProducts,
            setFilterProducts:setFilterProducts
        }}>
         <div className="h-screen w-screen bg-zinc-200 flex flex-wrap">
             <SideBar/>
            <div className="h-screen w-[85%] border-2 border-black">
            <Navbar/>
             <Body/>
            </div>  
         </div>
         </UserContext.Provider>
         </Provider>
    )

}

const appRouter = createBrowserRouter([
    {
       path:"/",
       element:<App/>
    },
    {
        path:"/description/:id",
        element:<Provider store={store}><Description/></Provider> 
    },
    {
        path:"/cart",
        element:<Provider store={store}><Cart/></Provider>
    },
    {
        path:"/checkout",
        element:<Provider store={store}><CheckOut/></Provider>
    }
])

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRouter}/>);