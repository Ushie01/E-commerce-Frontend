import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Hooks/useProduct";
import { useUser } from '../../../Hooks/useUser';
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import Button from "./../../componentsItem/Button";
import Counter from "../../componentsItem/Counter";
import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";
import image from "./../../../assets/x.svg";


const Cart = () => {
  const [cart,] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [productLength, setProductLength] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const { product } = useCart();
  const productId = product.reverse().map(value => value._id)[0];
  const [items, setItems] = useState('');
  const { user } = useUser('user');
  const userDetails = user?.data?.user;
  const navigate = useNavigate();
  console.log(productLength);
  
 
  
  const handleCheckOut = () => {
		if (!userDetails) {
			navigate(`/SignUp`)
		} else {
			navigate('/ShipTo')
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
                setProductLength={setProductLength}
              />        

              <div className="m-4 flex flex-col items-center justify-center space-y-8 ">
                <div className="flex flex-col items-center justify-center space-y-3 w-full border-gray border-2 p-3">
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="text-gray-400">{`items (${product.length})`}</p>
                    <p className="">{`₦${items.toLocaleString()}.00`}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="text-gray-400">Shipping</p>
                    <p className="">{(`₦${productLength ? 1000 * productLength?.length : 1000 * cart?.length}.00`)}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-80">
                    <p className="font-extrabold text-black">Total</p>
                    <p className="text-cyan-500 font-extrabold">{(`₦${totalPrice}.00`)}</p>
                  </div>
                </div>
              </div>
                <div className="flex p-4 left-0 right-0 bottom-6">
                  <Button
                      onClick={handleCheckOut}
                      text="Check Out" 
                      bgColor='red'
                      textColor='white'
                    />
                </div>
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