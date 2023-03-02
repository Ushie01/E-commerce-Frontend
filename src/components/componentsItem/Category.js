import Loader from "./Loading/Loader";

const Category = ({ products, column }) => {
    return (
    <div className={`${
        column === true
            ?
            "grid grid-cols-3 gap-3 text-center       items-center justify-center"
            :
            "flex"
    }`}>
        {
            products
                ?
                products?.map((prod, index) => (
                    <div key={index}>
                        <div>
                            <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                                {prod.name.split(" ")[0][0]}{prod.name.split(" ")[1][0]}
                            </button>
                        </div>
                        <div className="text-center m-3">{prod.name}</div>
                    </div>
                ))
                :
                <Loader />
        }
    </div>
    )
}

export default Category;