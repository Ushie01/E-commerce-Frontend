import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../Hooks/useProduct";
import { useUser } from '../../../Hooks/useUser';
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import Button from "./../../componentsItem/Button";
import Counter from "../../componentsItem/Counter";
import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";
import image from "./../../../assets/x.svg";


const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const { product, sum, sumItems } = useCart();
  const [totalPrice, setTotalPrice] = useState('');
  const productId = product.reverse().map(value => value._id)[0];
  const [items, setItems] = useState('');
  console.log(totalPrice);

  const { user } = useUser('user');
  const userDetails = user?.data?.user;
  const navigate = useNavigate();
 
  const handleProfile = () => {
		if (userDetails.name) {
			navigate(`/ShipTo`)
		} else {
			navigate('/SignUp')
		}
  } 
  


  // console.log(updatePrice);

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

              <Counter
                setValues={setItems}
                setTotalPrice={setTotalPrice}
              />        

              <div className="m-4 flex flex-col items-center justify-center space-y-8 ">
                <div className="flex flex-col items-center justify-center space-y-3 w-full border-gray border-2 p-3">
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="text-gray-400">{`items (${product.length})`}</p>
                    <p className="">{`₦${items.toLocaleString()}.00`}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="text-gray-400">Shipping</p>
                    <p className="">{(`₦${1000 * product.length.toLocaleString()}.00`)}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="font-extrabold text-black">Total</p>
                    <p className="text-cyan-500 font-extrabold">{(`₦${totalPrice}.00`)}</p>
                  </div>
                </div>
              </div>
                <Link
                  to="/ShipTo"
                  className="flex p-4 left-0 right-0 bottom-6"
                >
                <Button
                    onClick={() => handleProfile()}
                    text="Check Out" 
                    bgColor='red'
                    textColor='white'
                  />
                </Link>
            </>
            :
            <div className="flex items-center justify-center mt-48">
              <ScreenMsgPage
                res="You have no product selected"
                direction='Return To Home'
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