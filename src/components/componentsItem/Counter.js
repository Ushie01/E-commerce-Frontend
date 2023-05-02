import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteBin from "./../../assets/delete.svg";
import dash from "./../../assets/dash.svg";
import plus from "./../../assets/plus.svg";
import Favorite from "../../utils/favorite";


const Counter = ({setValues, setTotalPrice, setProductLength}) => {
    // initialize the product state from localStorage
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [sumItems, setSumItems] = useState(0);
    const [sumTotalPrice, setSumTotalPrice] = useState(0);

    // console.log(sumTotalPrice);
    
    // cart qty increment handle
    const incrementCounter = (id, size) => {
        setProduct((prevProducts) =>
            prevProducts.map((item) =>
                item._id === id && item.size === size
                    ? { 
                        ...item,
                        quantity: item.quantity + 1, 
                        items: (item.quantity + 1) * item.price,
                        totalPrice: (item.quantity + 1) * item.price + 1000
                    }
                    : item
            )
        );
    };

    // cart qty decrement handle
    const decrementCounter = (id, size) => {
        setProduct((prevProducts) =>
            prevProducts.map((item) =>
                item._id === id && item.size === size
                    ? { 
                        ...item, 
                        quantity: Math.max(1, item.quantity - 1),
                        items: Math.max(1, item.quantity - 1) * item.price,
                        totalPrice: Math.max(1, item.quantity - 1) * item.price + 1000
                    }
                    : item
            )
        );
    };

    // cart delete Item
    const deleteItem = (id, size) => {
		const resMsg = window.confirm("Are you sure you want to delete this item?!");
        if (resMsg === true) {
            const updatedProducts = product.filter(
                (item) => item._id !== id || item.size !== size
            );

            const updatedFavorites = favorite.filter(
                (item) => item.productId !== id
            );

            setProduct(updatedProducts);
            setFavorite(updatedFavorites);
            setProductLength(updatedProducts);   
        }
    };


    // reload dom when localStorage is set 0
    useEffect(() => {
        if (product.length === 0) {
            window.location.reload();
        }
    }, [product]);

    // update localStorage when product & favorite state changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(product));
        localStorage.setItem("favorites", JSON.stringify(favorite));
    }, [product, favorite]);

    useEffect(() => {
        const summationItems = product.reduce((acc, cur) => {
            return acc + cur.items
        }, 0);

        const summationTotalPrice = product.reduce((acc, cur) => {
            return acc + cur.totalPrice
        }, 0);
        
        
        setSumItems(summationItems);
        setValues(sumItems);
        setSumTotalPrice(summationTotalPrice);
        setTotalPrice(sumTotalPrice)
    }, [
        product, setValues,
        sumItems, setSumTotalPrice,
        setTotalPrice, sumTotalPrice
    ]);


    return (
        <>
            {product.map((item, index) => {
                const { name, price, quantity, productGallery, _id, size } = item;

                return (
                    <div
                        key={index}
                        className="flex flex-row items-center justify-between rounded-lg m-4 p-3 border-gray-100 border-2"
                    >
                        <Link to={`http://localhost:5000/api/v1/products/${productGallery[0]}`}>
                            <div className="w-28">
                                <img
                                    src={`http://localhost:5000/api/v1/products/${productGallery[0]}`}
                                    alt={productGallery[0]}
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col items-start text-lg justify-start space-y-5 p-2 w-36 h-28">
                            <p className="text-sm">{name}</p>
                            <p className="text-cyan-500">{`₦${price.toLocaleString()}.00`}</p>
                        </div>
                        <div className="flex flex-col w-32 h-28 p-2 space-y-9">
                            <div className="flex flex-row items-center justify-end space-x-3">
                                {/* favorite button */}
                                <Favorite
                                    id={_id}
                                    item={favorite}
                                    favorite={favorite}
                                    setFavorite={setFavorite}
                                />
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