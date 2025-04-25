const PopUp = ({ showPopUp, onClosePopUp, product }) => {

    if (!showPopUp) return null;

    const closePopUp = () => {
        onClosePopUp(false)
    }

    return (
        <div className="fixed top-8 right-5 bg-gray-200 shadow-xl rounded-xl p-10 z-40">
            <p className="text-lg text-center font-semibold mb-4">{product} added to cart</p>
            <div className="flex gap-4">
                <button onClick={closePopUp} className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">Show my cart</button>
                <button onClick={closePopUp} className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">Continue shopping</button>
            </div>


        </div>
    )

}
export default PopUp;