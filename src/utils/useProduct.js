import { useState ,useEffect } from "react";

const useProduct = ()=>{

    const [productItems , setProductItems] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
 
    async function getProducts(){
        try{
            const data = await fetch("https://fakestoreapi.com/products");

            const json = await data.json();
            
            setProductItems(json);
            setFilterProducts(json);
        }
        catch(err){
            console.log(err);
        }
    }
 
    useEffect(()=>{
        getProducts();
    },[]);
    
    
    return {productItems,setProductItems,filterProducts,setFilterProducts};
}

export default useProduct;