import ScreenMsgPage from "../Explore/ScreenMsgPage";
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import deleteBin from "../../../assets/delete.svg";
import arrow from "../../../assets/arrow.svg";
import empty from "../../../assets/x.svg";
import add from "../../../assets/plus_.svg";
import { Link } from "react-router-dom";

const ShipTo = () => {
  const isAddress = JSON.parse(localStorage.getItem("address")) || [];
    return (
      <>
        <Navbar2
          image={arrow}
          text="Ship To"
          secondImage={add}
          linkRoute="/Cart"
          secondLinkRoute="/AddAddress"
        />
        {
          isAddress.length > 0
            ?
            isAddress.map((address, index) => (
              <div className="m-5" key={index}>
                <div className="flex flex-col border-gray-100 border-2 p-5 rounded-md space-y-3 ">
                <p className="text-md font-extrabold">{address.firstName} { address.lastName}</p>
                  <p className="text-gray-500">
                    {address.address}
                  </p>
                  <p className="text-gray-500">{address.phoneNumber}</p>
                  <div className="flex flex-row items-center">
                    <Link to={`/Addaddress/${address.phoneNumber}`}>
                      <button className="h-12 w-28 text-white shadow-md bg-red-600 rounded-md font-extrabold text-md ">
                        {" "}
                        Edit
                      </button>
                    </Link>
                    <img src={deleteBin} alt={deleteBin} className="ml-8 h-8 w-8" />
                  </div>
                </div>
                <Link to="/ScreenPage" className="flex flex-auto mt-12 fixed left-0 right-0 bottom-5">
                  <Button text="Next" className="m-auto" />
                </Link>
              </div>
            ))
            :
            <div className="mt-48">
              <ScreenMsgPage
                res="you haven't place an address"
                direction="Return to Home"
                image={empty}
                button={true}
              />
            </div>
        }





      </>
    );
}

export default ShipTo;