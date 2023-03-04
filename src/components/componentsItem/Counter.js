// import Loader from "./Loading/Loader";
import deleteBin from "./../../assets/delete.svg";
import favorite from "./../../assets/heart-fill.svg";
import dash from "./../../assets/dash.svg";
import plus from "./../../assets/plus.svg";
import { useState } from "react";


const Counter = () => {
    const products = JSON.parse(localStorage.getItem('cart'));
    const [product, setProduct] = useState(products);

    // cart qty increment handle
    const incrementCounter = (id, size) => {
        setProduct((prevProducts) =>
            prevProducts.map((item) =>
                item._id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
        localStorage.setItem("cart", JSON.stringify(product));
    };

    // cart qty decrement handle
    const decrementCounter = (id, size) => {
        setProduct((prevProducts) =>
            prevProducts.map((item) =>
                item._id === id && item.size === size
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            )
        );
        localStorage.setItem("cart", JSON.stringify(product));
    };

    // cart delete Item
  const deleteItem = (id, size) => {
    setProduct((prevProducts) =>
      prevProducts.filter(
        (item) => item._id !== id || item.size !== size
      )
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        product.filter((item) => item._id !== id || item.size !== size)
      )
    );
  };

    return (
        <>
            {products.map((item, index) => {
                const { name, price, quantity, productGallery, _id, size } = item;

                return (
                    <div
                        key={index}
                        className="flex flex-row items-center justify-between rounded-lg m-4 p-3 border-gray-100 border-2"
                    >
                        <div className="w-28">
                            <img
                                src={`http://localhost:5000/api/v1/products/${productGallery[0]}`}
                                alt={productGallery[0]}
                            />
                        </div>
                        <div className="flex flex-col items-start text-lg justify-start space-y-5 p-2 w-36 h-28">
                            <p className="text-sm">{name}</p>
                            <p className="text-cyan-500">{`₦${price}`}</p>
                        </div>
                        <div className="flex flex-col w-32 h-28 p-2 space-y-9">
                            <div className="flex flex-row items-center justify-end space-x-3">
                                <img src={favorite} alt={favorite} className="h-6 w-6" />
                                <img
                                    src={deleteBin}
                                    alt={deleteBin}
                                    className="h-7 w-7"
                                    onClick={() => deleteItem(_id, size)} 
                                />
                            </div>
                            <div className="flex flex-row h-9 w-28 border-gray-100 border-2">
                                <button
                                    className="flex flex-auto items-center h-8 w-1/3"
                                    onClick={() => decrementCounter(_id, size)}
                                    disabled={quantity === 0}
                                >
                                    <img src={dash} alt={dash} className="h-8 w-8" />
                                </button>
                                <div className="flex items-center justify-center text-center h-8 w-1/3 bg-gray-200">
                                    <p>{quantity}</p>
                                </div>
                                <button
                                    className="flex flex-auto items-center h-8 w-1/3"
                                    onClick={() => incrementCounter(_id, size)}
                                >
                                    <img src={plus} alt={plus} className="h-8 w-8" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Counter;