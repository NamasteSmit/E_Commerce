import { removeItems } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const CartCard = ({items,index})=>{
   
     const dispatch = useDispatch()
    const handleClearItem = (index)=>{
       dispatch(removeItems(index))
    }

     
    return (
        <div className="w-[18%] h-[50%]  flex flex-col justify-evenly p-3 shadow-md shadow-gray-700 gap-2 m-5 pb-9 relative mt-16">
            <div className="w-[100%] h-[50%] shadow-sm shadow-slate-600 p-1">
                <img src={items[0].image} alt="" className="w-[100%] h-[100%]"/>
            </div>
            <h1 className="text-sm font-semibold">{items[0].title}</h1>
            <h2 className="text-xl font-semibold">${items[0].price}</h2>
            <input type="text" placeholder="Coupon Code.." className="shadow-md shadow-slate-700 p-1 outline-none" />
            <button className="bg-red-300 w-[50%] p-1 absolute top-[95%] left-[30%] rounded-md font-semibold" onClick={()=>handleClearItem(index)}>Remove</button>
        </div>
    )
}

export default CartCard;