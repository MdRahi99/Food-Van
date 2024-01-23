const ItemCard = (items) => {

    const {ImageUrl ,Name} = items;

    return (
        <>
            <div className="w-full">
                <img className="h-40 w-full lg:h-64 lg:w-64 rounded-2xl shadow-2xl shadow-stone-400" src={ImageUrl ? ImageUrl :'Loading...'} alt={Name} />
                <h1 className="text-center text-slate-600 mt-1">{Name}</h1>
            </div>
        </>
    );
};

export default ItemCard;