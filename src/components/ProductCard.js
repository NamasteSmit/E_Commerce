const ProductCard = ({product})=>{
    const {image,title,price,rating} = product;
    return (
        <div className="w-[200px] h-[300px] bg-zinc-100 flex flex-col justify-evenly items-start shadow-md shadow-slate-600 relative m-3 ml-5 hover:scale-95">
            <div className="w-[100%] h-[50%]">
                <img src={image} alt="" className="ml-5 h-40 w-40"/>
            </div>
            <h1 className="ml-5 font-semibold whitespace-pre-wrap mt-2 overflow-hidden">{title}</h1>
            <h2 className="ml-5 font-semibold bg-slate-200 p-1 w-[50%] text-center shadow-md shadow-slate-500">Rating: {rating.rate}</h2>
            {/* <button className=" ml-5 bg-zinc-300 p-1 w-[100px] text-center font-semibold rounded-md shadow-sm shadow-black">Add To Cart</button>  */}
            <span className="absolute -top-2 left-36 bg-slate-300 text-center w-16 shadow-md shadow-black">${price}</span>
        </div>
    )
}

export default ProductCard;