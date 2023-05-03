import { Link } from "react-router-dom";

const CounterComponent = ({ image, name, price }) => {
    return (
        <div className="flex flex-row items-center justify-between rounded-lg m-4 p-3 border-gray-100 border-2">
            <Link to={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${image}`}>
                <div className="w-28"> 
                    <img
                        src={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${image}`}
                        alt={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${image}`}
                    />
                </div>
            </Link>
            <div className="flex flex-col items-start text-lg justify-start space-y-5 p-2 w-36 h-28">
                <p className="text-sm text-black font-extrabold">{name}</p>
                <p className="text-cyan-500">{`₦${parseFloat(price).toLocaleString()}.00`}</p>
            </div>
            <div className="flex flex-col w-32 h-28 p-2 space-y-9">
            </div>
        </div>
    )
}

export default CounterComponent;