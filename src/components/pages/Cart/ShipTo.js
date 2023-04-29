import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postOrder, flwPaymentMethod } from "../../../helper/api";
import { useCart } from "../../../Hooks/useProduct";
import { useUser } from "../../../Hooks/useUser";
import { Toast } from "../../../Hooks/useToast";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import deleteBin from "../../../assets/delete.svg";
import arrow from "../../../assets/arrow.svg";
import empty from "../../../assets/x.svg";
import exclamation from "../../../assets/exclamation.svg"
import add from "../../../assets/plus_.svg";



const ShipTo = () => {
  const [addresses, setAddresses] = useState(JSON.parse(localStorage.getItem("address")) || []);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [addressSelected, setAddressSelected] = useState(0);
  const [selectIndex, setSelectedIndex] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [click, setClick] = useState(false);
  const { sum } = useCart();
  const { user } = useUser('user');
	const userDetails = user?.data?.user
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  // delete address
  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => {
      const filteredAddresses = prevAddresses
        .filter(
          (address) => address.index !== index
        );
      return filteredAddresses;
    });
    window.location.reload('/shipTo');
  };

  const filteredAddresses = addresses
    .filter((address) => address.index === selectIndex)[0];
  if (filteredAddresses) { delete filteredAddresses.index;}

  // Handle to place order
  const onHandleSubmit = async () => {
    if (!filteredAddresses) {
      Toast({
        text: 'Please select an address to proceed',
        position: 'top-right'
      })
    } else {
      const data = {
        shippingAddress: filteredAddresses,
        shippingPrice: cart.length * 1000,
        totalPrice: sum,
        paymentMethod: "flw",
        orderItems: cart.map((c) => ({
            qty: c.quantity,
            price: c.price * c.quantity,
            product: c._id,
            size: c.size
        }))
      };

      const data2 = {
        tx_ref: Date.now(),
        amount: sum + cart.length * 100,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        redirect_url: "http://localhost:3000",
        customer: {
          email: userDetails.email,
          phone_number: userDetails.phoneNo,
          name: userDetails.name
        },
        customizations: {
          title: "Euphorya Order Payment",
          description: "Payment for items in cart",
          logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"
        }
      }
     
      const res = await flwPaymentMethod(data2);
      console.log(res);
      // const res = await postOrder(data);
      setIsSubmitted(true);
      // console.log(res);
      // setTimeout(() => {
      //     navigate("/ScreenPage")
      // }, 1000);
    }
  }

  useEffect(() => {
    const prod = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(prod);
  }, []);

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {
        !click
          ?
          <>
          <Navbar2
            image={arrow}
            text="Ship To"
            secondImage={add}
            linkRoute="/Cart"
            secondLinkRoute="/AddAddress"
          />
            {addresses.length > 0
              ? (
                <> 
                  <div>
                  {addresses.reverse().map((address, index) => (
                    <div className="m-5" key={index}>
                      <div className={`flex flex-col border-gray-100 border-2 ${addressSelected ? 'hover:border-red-500': ""} p-5 rounded-md space-y-3 `}
                        onClick={() => { setAddressSelected(true); setSelectedIndex(address.index); }}
                      >
                        <p className="text-md font-extrabold">
                          {address.firstName} {address.lastName}
                        </p>
                        <p className="text-gray-500">{address.address}</p>
                        <p className="text-gray-500">{address.phoneNumber}</p>
                        <div className="flex flex-row items-center">
                          <Link to={`/Addaddress/${address.index}`}>
                            <button className="h-12 w-28 text-white shadow-md bg-red-600 rounded-md font-extrabold text-md ">
                              Edit
                            </button>
                          </Link>
                          <img
                            src={deleteBin}
                            alt="delete"
                            onClick={() => {
                              setDeleteIndex(address.index);
                              setClick(true);
                            }}
                            className="ml-8 h-8 w-8"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-auto mt-12 left-0 right-0 p-5 mb-9">
                    <Button
                      text="Next"
                      className="m-auto"
                      textColor='white'
                      bgColor="red"
                      onClick={onHandleSubmit}
                      disabled={isSubmitted}
                    />
                  </div>
                </div>
                </>
              ) : (
                <div className="mt-48">
                  <ScreenMsgPage
                    res="You haven't added an address"
                    direction="Click to add address"
                    image={empty}
                    button={true}
                    linkRoute='/AddAddress'
                    bgColor="cyan"
                  />
                </div>
              )}
          </>
          :
          <>
            <div className="mt-48">
              <ScreenMsgPage
                res="Confirmation"
                direction="Delete"
                image={exclamation}
                colorIcon='red'
                button={true}
                secondButton={true}
                onClick={() => { handleDeleteAddress(deleteIndex) }}
                linkRoute="/ShipTo"
              />
            </div>
          </>
      }
    </>
  );
};

export default ShipTo;
