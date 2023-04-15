import Navbar2 from "../../componentsItem/Navbar2";
import Footer from "../../componentsItem/Footer";
import profile from "../../../assets/account.svg";
import box from "../../../assets/box.svg";
import location from "../../../assets/location.svg";
import card from "../../../assets/card.svg";
import { Link } from "react-router-dom";


const Account = () => {
    return (
      <>
        <Navbar2 text={"Account"} linkRoute='/' />
        <div className="flex flex-col">
          <Link to="/Account/Profile">
            <div className="flex flex-row items-start justify-start text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <img src={profile} alt={profile} className="h-7 w-7 " />
              <p>Profile</p>
            </div>
          </Link>
          <Link to="/Order">
            <div className="flex flex-row items-start justify-start text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <img src={box} alt={box} className="h-7 w-7 " />
              <p>Order</p>
            </div>
          </Link>
          <Link to="/ShipTo">
            <div className="flex flex-row items-start justify-start text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <img src={location} alt={location} className="h-7 w-7 " />
              <p>Address</p>
            </div>
          </Link>
          <div className="flex flex-row items-start justify-start text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
            <img src={card} alt={card} className="h-7 w-7 " />
            <p>Payment</p>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Account;