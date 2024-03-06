import UserContext from "../utils/context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../utils/useProduct";
import { addItems } from "../utils/cartSlice";
import {useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Description = ()=>{

 
      const param = useParams();
      const{id} = param;

       const {productItems} = useProduct();
      
     const filteredItem = productItems.filter((item)=>{
        return id==item.id;
     })
 
     
      const dispatch =  useDispatch()

     const handleAddItems = (filteredItem)=>{
      dispatch(addItems(filteredItem))
      toast.success('Added SuccessFully')
     }
     

     
    return filteredItem.length==0 ? <h1>Loading..</h1> : (
        <>
          <ToastContainer/>
        <div className="w-full h-screen bg-zinc-100 flex flex-col justify-center items-center">
            <div className="w-[45%] h-[78%]  flex flex-col p-3 bg-zinc-100 shadow-md shadow-black relative">
                 <div className='w-[300px] h-[300px] '>
                    <img src={filteredItem[0].image} alt="" className="w-[80%] h-[80%]" />
                 </div>
                 <div className="w-full h-full font-semibold text-xl flex flex-col justify-evenly">
                    <h3 className="text-2xl font-semibold shadow-sm shadow-slate-600 p-1">{filteredItem[0].title}</h3>
                    <h3 className="font-light">{filteredItem[0].category}</h3>
                    <h3 className="text-sm text-blue-800">{filteredItem[0].description}</h3>
                    <h3 className="text-lg">${filteredItem[0].price}</h3>
                 </div>
                 <button className="bg-zinc-100 shadow-md shadow-slate-600 w-32 p-2 absolute top-[95%] left-[80%]
                 font-semibold hover:bg-gray-700 hover:text-white transition all liner 2s " onClick={()=>handleAddItems(filteredItem)}>Add To Cart</button>
            </div>
            <div className="flex justify-evenly w-[35%]  mt-5">
                 <button className="p-2 border-2 border-green-400 w-32 rounded-md shadow-md shadow-slate-400 font-semibold">Edit</button>
                 <button className="p-2 border-2 border-red-400 w-32 rounded-md shadow-md shadow-slate-400 font-semibold">Delete</button>
            </div>
        </div>
        </>
    )
}

export default Description;