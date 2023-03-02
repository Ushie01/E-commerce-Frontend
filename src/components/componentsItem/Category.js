import { Link } from "react-router-dom";
import Loader from "./Loading/Loader";

const Category = ({ products, column }) => {
    return (
    <div className={`${
        column === true
            ?
            "grid grid-cols-3 gap-3 text-center items-center justify-center"
            :
            "flex"
    }`}>
        {
            products
                ?
                products?.map((prod, index) => (
                    <div key={index}>
                        <Link to={`Product/${prod?._id}`}>
                            <div>
                                <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                                    {prod?.collectionsData.split(" ")[0][0]}{prod?.collectionsData.split(" ")[1] ? prod?.collectionsData.split(" ")[1][0] : "" }
                                </button>
                            </div>
                            <div className="text-center m-3">{prod?.collectionsData}</div>
                        </Link>
                    </div>
                ))
                :
                <Loader />
        }
    </div>
    )
}

export default Category;