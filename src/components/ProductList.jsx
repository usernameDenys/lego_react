import { useEffect, useState } from "react";
import { getCards } from "../features/cardApi";
import ProductCard from "./ProductCard";

const ProductList = ({ itemOnCart, onUpdateItemsOnCart, handleAddToCart }) => {
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await getCards();
            setCardInfo(res);
        }
        getData();

    }, []);


    return (
        <div className="flex flex-wrap justify-center gap-10">
            {cardInfo.map((card, index) => (
                <article key={index} className="bg-white rounded-[2rem] w-[350px] h-[570px] p-[1rem] flex flex-col text-center shadow-lg">
                    <ProductCard
                        src={card.imageSrc}
                        cardTitle={card.title}
                        category={card.category}
                        price={card.price}
                        dispo={card.dispo}
                        itemOnCart={itemOnCart}
                        onUpdateItemsOnCart={onUpdateItemsOnCart}
                        handleAddToCart={() => {
                            onUpdateItemsOnCart([...itemOnCart, card.title]);
                            handleAddToCart(card.title);
                        }}
                    />
                </article>

            ))}
        </div>


    );
};

export default ProductList;
