import { useState, useEffect } from "react";
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import deleteBin from "../../../assets/delete.svg";
import arrow from "../../../assets/arrow.svg";
import empty from "../../../assets/x.svg";
import exclamation from "../../../assets/exclamation.svg"
import add from "../../../assets/plus_.svg";
import { Link } from "react-router-dom";

const ShipTo = () => {
  // const orderItem = JSON.parse(localStorage.getItem("cart"));
  const [addresses, setAddresses] = useState(JSON.parse(localStorage.getItem("address")) || []);
  const [click, setClick] = useState(false);
  const [deletePhoneNumber, setDeletePhoneNumber] = useState(null);
  const [addressSelected, setAddressSelected] = useState(0);
  const [selectIndex, setSelectedIndex] = useState("");

  // delete address
  const handleDeleteAddress = (phoneNumber) => {
    setAddresses((prevAddresses) => {
      const filteredAddresses = prevAddresses
        .filter(
          (address) => address.phoneNumber !== phoneNumber
        );
      return filteredAddresses;
    });
    // window.location.reload(true);
  };

  const filteredAddresses = addresses.filter((address) => address.index === selectIndex);
  console.log(filteredAddresses);

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <>
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
                  {addresses.reverse().map((address) => (
                    <div className="m-5" key={address.index}>
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
                      <Link to="/ScreenPage" className="flex flex-auto mt-12 fixed left-0 right-0 bottom-5">
                        <Button text="Next" className="m-auto" textColor='white' bgColor="red"  />
                      </Link>
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
