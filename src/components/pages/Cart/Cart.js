import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import Button from "./../../componentsItem/Button";
import Counter from "../../componentsItem/Counter";
import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";
import image from "./../../../assets/x.svg";


const Cart = () => {
  const [sum, setSum] = useState(Number);
  const [product, setProduct] = useState([]);
  const productId = product.reverse().map(value => value._id)[0];

  useEffect(() => {
    const prod = JSON.parse(localStorage.getItem('cart')) || [];
    setProduct(prod)
    const summationPrice = prod.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    setSum(summationPrice)
  }, []);

    return (
      <>
        {
          product.length > 0
            ?
            <>
              <Navbar2
                text="Your Cart"
                image={arrow}
                linkRoute={`/Product/${productId}`}
                products={product}
              />

              <Counter products={product} />        

              <div className="m-4 flex flex-col items-center justify-center space-y-8 ">
                <div className="flex flex-col items-center justify-center space-y-3 w-full border-gray border-2 p-3">
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="text-gray-400">{`items (${product.length})`}</p>
                    <p className="">{`₦${sum.toLocaleString()}`}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="text-gray-400">Shipping</p>
                    <p className="">{(`₦${2000 * product.length }`)}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="font-extrabold text-black">Total</p>
                    <p className="text-cyan-500 font-extrabold">{(`₦${sum + 2000 * product.length}`).toLocaleString()}</p>
                  </div>
                </div>
                <Link to="/ShipTo" className="flex left-0 right-0 bottom-6 ">
                  <Button text="Check Out" bgColor='red' textColor='white' />
                </Link>
              </div>
            </>
            :
            <div className="flex items-center justify-center mt-48">
              <ScreenMsgPage
                res="You have no product selected"
                direction='Return To Order'
                image={image}
                button={true}
                linkRoute="/"
              />
            </div>
        }
      </>
    );
}

export default Cart;