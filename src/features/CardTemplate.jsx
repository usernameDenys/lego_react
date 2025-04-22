const CardTemplate = ({ src, cardTitle, category, price, dispo }) => (
    <article className="bg-white rounded-[2rem] w-[430px] h-[570px] p-[1rem] flex flex-col text-center shadow-lg">
        <img
            src={src}
            alt={src}
            width={200}
            height={300}
            className="object-cover rounded-lg w-auto mb-[20px]"
        />
        <h2 className="font-[Poppins] font-semibold text-[24px] mx-[0.5rem] my-2">{cardTitle}</h2>
        <p className=" py-2 mx-25 text-white bg-[#444577] rounded-[50px]">{category}</p>
        <p className="mx-[0.5rem] my-2">{price}€</p>
        <p className="mx-[0.5rem] my-2">{dispo}</p>
        <button className="mx-25 my-2 py-2 rounded-2xl text-white bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Ajouter</button>
    </article>
);

export default CardTemplate;
