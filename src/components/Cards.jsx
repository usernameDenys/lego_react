import CardTemplate from "../features/CardTemplate";

const Cards = () => {
    const imageSrc = "https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2";
    const title = "Titanic";
    const category = "Historique";
    const price = 199.99;
    const dispo = "Disponible";

    return (
        <CardTemplate
            src={imageSrc}
            cardTitle={title}
            category={category}
            price={price}
            dispo={dispo}
        />
    );
};

export default Cards;
