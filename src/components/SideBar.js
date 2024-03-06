import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/context";
import { Link,useLocation } from "react-router-dom";



const SideBar = () => {
 
  const{productItems,setFilterProducts,filterProducts} = useContext(UserContext);
   
   let distinct_category = productItems.reduce((acc,cv)=>{
        return [...acc,cv.category]  
   },[])
   
   //to get distinct values only
   distinct_category = [...new Set(distinct_category)]

   

   //same like useParam
   //also to convert the data we get from param to string we use decodeURIComponent()
   const {search} = useLocation();
   const category = decodeURIComponent(search.split("=")[1]);
  
  //  const categoryData =  filterProducts.filter((item)=>{
  //      return item.category === category
  //   })

    //  console.log("CD",categoryData)
   
    

     const[catagerotyfilteredProducts,setCategoryFilteredProducts] =useState(null)
  
      console.log("setCategoryFilteredProducts",catagerotyfilteredProducts);

    const getProductsCategory = async()=>{
     
         try{
          const data = await fetch(`https://fakestoreapi.com/products/category/${category}`);

          const json = await data.json();
          console.log(json);
           
          setCategoryFilteredProducts(json)
          setFilterProducts(json);
         }
         catch(err){
             console.log(err);
         }
         
    }

    useEffect(()=>{
      if(!catagerotyfilteredProducts || category=="undefined"){
        setCategoryFilteredProducts(productItems)
        setFilterProducts(productItems)
      }
      if(category != "undefined") getProductsCategory();

      // return()=>{
      //   setCategoryFilteredProducts(productItems)
      //   setFilterProducts(productItems)
      // }
    },[category,productItems]);
 
  


  return (
    <div className="w-[15%] h-full bg-slate-200">
      <button className="border-2 border-black p-2 m-5 ml-8 text-slate-700 shadow-sm shadow-black bg-emerald-300 font-semibold rounded-md">
        Add New Product
      </button>

      <div className="h-[30%]">
        <h1 className="text-2xl ml-4 border-b-2 border-black">Category Filter</h1>
        <hr className="w-[85%] ml-3" />
        <div className="flex flex-col items-start justify-evenly ">
         {
          distinct_category.map((item,index)=>{
            return (
            <Link  key={index} to={`/?category=${item}`} className="w-[90%]"><li className="ml-5 bg-zinc-100 p-2 mt-3 shadow-md shadow-slate-600 font-semibold" >
                {item}
              </li></Link> 
            )
          })
         }
        </div>
      </div>
    </div>
  );
};

export default SideBar;
