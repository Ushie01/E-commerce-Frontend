// import { useState } from "react";
import { Link } from "react-router-dom";
import account from "./../../assets/account_.svg";
import account1 from "./../../assets/account.svg";
import cart from "./../../assets/cart.svg";
import cart1 from "./../../assets/cart_.svg";
import explore from "./../../assets/explore.svg";
import explore1 from "./../../assets/explore_.svg";
import home from "./../../assets/home.svg";
import offer from "./../../assets/offer.svg";
import home1 from "./../../assets/home_.svg";
import offer1 from "./../../assets/offer_.svg";



const Footer = () => {
  const pathname = window.location.pathname;



  return (
    <div className="flex flex-row text-gray-500 space-x-2 h-20 w-full p-3 items-center justify-between bg-white fixed left-0 right-0 bottom-0 border-t-2">
      {
        pathname === "/"
        ?
        <Link to="/">
          <div className="text-center">
            <button>
              <img src={home1} alt={home1} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm text-black">Home</p>
          </div>
        </Link>
        :
        <Link to="/">
          <div className="text-center">
            <button>
              <img src={home} alt={home} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Home</p>
          </div>
        </Link>
      }
      {
        pathname === "/Explore"
          ?
        <Link to="/Explore">
          <div className="text-center">
            <button>
              <img src={explore1} alt={explore1} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm text-black">Explore</p>
          </div>
        </Link>
        :
        <Link to="/Explore">
          <div className="text-center">
            <button>
              <img src={explore} alt={explore} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Explore</p>
          </div>
        </Link>
      }
      {
        pathname === "/Cart"
        ?
        <Link to="/Cart">
          <div className="text-center">
            <button>
              <img src={cart1} alt={cart1} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm text-black">Cart</p>
          </div>
        </Link>
        :
        <Link to="/Cart">
          <div className="text-center">
            <button>
              <img src={cart} alt={cart} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Cart</p>
          </div>
        </Link>
      }
      {
        pathname === "/Offer"
          ?
        <Link to="/Offer">
          <div className="text-center">
            <button>
              <img src={offer1} alt={offer1} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm text-black">Offer</p>
          </div>
        </Link>
        :
        <Link to="/Offer">
          <div className="text-center">
            <button>
              <img src={offer} alt={offer} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Offer</p>
          </div>
        </Link>
      }
      {
        pathname === '/Account'
          ?
        <Link to="/Account">
          <div className="text-center">
            <button>
              <img src={account1} alt={account1} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm text-black">Account</p>
          </div>
        </Link>
        :
        <Link to="/Account">
          <div className="text-center">
            <button>
              <img src={account} alt={account} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Account</p>
          </div>
        </Link>
      }
    </div>
  );
}

export default Footer;