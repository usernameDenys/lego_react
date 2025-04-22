import { useEffect, useState } from "react";
import CardTemplate from "../features/CardTemplate";
import { getCards } from "../features/cardApi";

const Cards = () => {
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
                <article key={index} className="bg-white rounded-[2rem] w-[430px] h-[570px] p-[1rem] flex flex-col text-center shadow-lg">
                    <CardTemplate
                        src={card.imageSrc}
                        cardTitle={card.title}
                        category={card.category}
                        price={card.price}
                        dispo={card.dispo}
                    />
                </article>

            ))}
        </div>


    );
};

export default Cards;
