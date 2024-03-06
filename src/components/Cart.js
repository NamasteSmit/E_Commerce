import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCards";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = ()=>{
  
    const cartItems = useSelector(store=>store.cart.items);
    
    const dispatch = useDispatch()
     
    const handleClearCart = ()=>{
          dispatch(clearCart());
    }

     return (
        <>
           <div className="bg-zinc-100 w-full h-screen flex flex-wrap p-5 relative overflow-scroll">
            {
               cartItems.length==0 ? <h1 className="h-[700px] w-full">Empty..</h1>  : cartItems.map((items,index)=>{
                    return <CartCard key={items.id} items={items} index={index}/>
                })
            }         
        </div>
        <button className="bg-yellow-200 p-2 w-[10%] m-5 absolute top-0 left-[87%] font-semibold shadow-sm shadow-black" onClick={()=>handleClearCart(cartItems)}>Clear Cart</button>
       <Link to="/checkout"><button className="bg-orange-300 absolute top-[91%] left-[87%] p-2 rounded-sm shadow-sm shadow-slate-600">CheckOut</button></Link>
        </>
        
     )
}

export default Cart;