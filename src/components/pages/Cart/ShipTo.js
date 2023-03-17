import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postOrder } from "../../../helper/api";
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
  const [addresses, setAddresses] = useState(JSON.parse(localStorage.getItem("address")) || []);  const [deletePhoneNumber, setDeletePhoneNumber] = useState(null);
  const [addressSelected, setAddressSelected] = useState(0);
  const [selectIndex, setSelectedIndex] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [click, setClick] = useState(false);
  const [sum, setSum] = useState(Number);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // delete address
  const handleDeleteAddress = (phoneNumber) => {
    setAddresses((prevAddresses) => {
      const filteredAddresses = prevAddresses
        .filter(
          (address) => address.phoneNumber !== phoneNumber
        );
      return filteredAddresses;
    });
  };

  const filteredAddresses = addresses
    .filter((address) => address.index === selectIndex)[0];
  if (filteredAddresses) {
    delete filteredAddresses.index;
  }

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
            product: c._id
        }))
      }
      const res = await postOrder(data);
      setIsSubmitted(true);
      console.log(res);
      setTimeout(() => {
          navigate("/ScreenPage")
      }, 1000);
    }
  }

  useEffect(() => {
    const prod = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(prod)
    const summationPrice = prod.reduce((acc, cur) => {
      return acc + (cur.price * cur.quantity);
    }, 0);
    setSum(summationPrice)
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
                              setDeletePhoneNumber(address.index);
                              setClick(true);
                            }}
                            className="ml-8 h-8 w-8"
                          />
                        </div>
                      </div>
                      <div className="flex flex-auto mt-12 fixed left-0 right-0 bottom-5">
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
                  ))}
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
                onClick={() => { handleDeleteAddress(deletePhoneNumber) }}
                linkRoute="/ShipTo"
              />
            </div>
          </>
      }
    </>
  );
};

export default ShipTo;
