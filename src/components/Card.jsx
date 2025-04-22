const Card = ({ src, cardTitle, category, price, dispo }) => {
    return <article>

        <img
            src={src}
            alt={src}
            width={200}
            className=" aspect-3/2 object-cover rounded-lg w-auto mb-[20px]"
        />
        <h2>{cardTitle}</h2>
        <a href="#">{category}</a>
        <p>{price}</p>
        <p>{dispo}</p>
        <button>Ajouter</button>
    </article>


};

export default Card;