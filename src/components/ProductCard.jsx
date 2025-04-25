const ProductCard = ({ src, cardTitle, category, price, dispo, itemOnCart, onUpdateItemsOnCart, handleAddToCart }) => {

    const handleClick = () => {
        onUpdateItemsOnCart([...itemOnCart, cardTitle])
        handleAddToCart(cardTitle);
    }

    return <>
        <img
            src={src}
            alt={src}
            className="h-[300px] object-contain rounded-lg  mb-[10px]"
        />
        <h2 className="font-[Poppins] font-semibold text-[24px] mx-[0.5rem] my-2">{cardTitle}</h2>
        <p className=" py-2 mx-25 text-white bg-[#444577] rounded-[50px]">{category}</p>
        <p className="mx-[0.5rem] my-2">{price}€</p>

        {dispo ? <p className="mx-[0.5rem] my-2">Available</p> : <p className="mx-[0.5rem] my-2">Out of stock</p>}
        <button onClick={handleClick} className="mx-25 my-2 py-2 rounded-2xl text-white bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Add to cart</button>
    </>
};

export default ProductCard;
