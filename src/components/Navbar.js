import { useContext, useState } from "react";
import UserContext from "../utils/context";
import { UseSelector, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ()=>{

    const cartItems = useSelector(store=>store.cart.items);

     const{productItems,filterProducts,setFilterProducts} = useContext(UserContext);
     const [searchText,setSearchText] = useState("");


     const handleSearch = (searchText)=>{
        const filterData =   productItems.filter((item)=>{
             return item.title.toLowerCase().includes(searchText.toLowerCase())
         })
         setFilterProducts(filterData)
     }

    // const {productItems,setProductItems} = useContext(UserContext);
    return (
        <div className="w-[100%] h-[10%] bg-slate-200 flex justify-between shadow-sm shadow-slate-800">
            <div className="w-[35%] h-full flex justify-evenly items-center ml-16">
            <input type="text" placeholder="Search..." className=" p-3 w-[80%] h-[45%] font-semibold text-blue-700 text-xl outline-none shadow-md shadow-slate-600 rounded-sm" value={searchText} onChange={(e)=>{
                   setSearchText(e.target.value)   
            }}/>  
            <button className="p-[3px] border-2 border-black shadow-md shadow-slate-600 mt-1" onClick={()=>handleSearch(searchText)}>search</button>
            </div>           
           <ul className="w-[55%] h-[100%] flex justify-evenly items-center">
               <Link to="/"><li className="font-semibold text-xl hover:border-2 border-b-black p-2  ">Home</li></Link>
               <li className="font-semibold text-xl hover:border-2 border-b-black p-2">About Us</li>
               <Link to="/cart"><li className="font-semibold text-xl hover:border-2 border-b-black p-2">Cart-{cartItems.length}</li></Link>
            </ul> 
        </div>
    )
}

export default Navbar;