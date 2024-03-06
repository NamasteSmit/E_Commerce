import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
 import useProduct from "../utils/useProduct";
import UserContext from "../utils/context"


const Body = ()=>{
       
      const{productItems,setProductItems,filterProducts} = useContext(UserContext);
      console.log("filtered-",filterProducts)
    return(
        <div className="p-4  w-[100%] h-[90%] flex flex-wrap overflow-scroll gap-5">
            {
              filterProducts.length ==0 ? <h1>Loading...</h1> :  filterProducts.map((product)=>{
                    return <Link key={product.id} to={`/description/${product.id}`}> <ProductCard  product={product}/></Link>
                })
            }
        </div>
    )
}

export default Body;
