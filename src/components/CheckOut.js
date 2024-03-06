import { useSelector } from "react-redux";

const CheckOut = ()=>{

    const cartItems = useSelector(store=>store.cart.items);
    
    const total = cartItems.reduce((acc,cv)=>{
        return acc+cv[0].price
     },0)

    return (
        <>
            <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
            <div className="bg-emerald-400 w-[30%] h-[50%] shadow-md shadow-slate-600 flex flex-col justify-evenly" >
              <h1 className="text-2xl text-center font-semibold">Total Items {cartItems.length}</h1>
              <h2 className="text-xl font-thin">Order Summary :</h2>
              <h3 className="text-xl shadow-sm shadow-black bg-emerald-500 p-2 mt-20">Total : ${Math.round(total)}</h3>
            </div>
        </div>
        <button className="absolute top-[5%] left-[85%] bg-cyan-500 p-2 w-[10%] font-semibold shadow-md shadow-slate-600 ">pay</button>
        </>
        
    )
}

export default CheckOut;