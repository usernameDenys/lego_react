const CardTemplate = ({ src, cardTitle, category, price, dispo, handleClick }) => (

    <>
        <img
            src={src}
            alt={src}
            className="h-[300px] object-contain rounded-lg  mb-[10px]"
        />
        <h2 className="font-[Poppins] font-semibold text-[24px] mx-[0.5rem] my-2">{cardTitle}</h2>
        <p className=" py-2 mx-25 text-white bg-[#444577] rounded-[50px]">{category}</p>
        <p className="mx-[0.5rem] my-2">{price}€</p>

        {dispo ? <p className="mx-[0.5rem] my-2">Disponible</p> : <p className="mx-[0.5rem] my-2">En rupture</p>}
        <button onClick={handleClick} className="mx-25 my-2 py-2 rounded-2xl text-white bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Ajouter</button>
    </>
);

export default CardTemplate;
