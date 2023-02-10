import { Link } from "react-router-dom";
import account from "./../../assets/account_.svg";
import cart from "./../../assets/cart.svg";
import explore from "./../../assets/explore.svg";
import home from "./../../assets/home.svg";
import offer from "./../../assets/offer.svg";


const Footer = () => {
    return (
      <div className="flex flex-row text-gray-500 space-x-2 h-20 w-full p-3 items-center justify-between bg-white fixed left-0 right-0 bottom-0 border-t-2">
          <Link to="/">
            <div className="text-center">
              <button>
                <img src={home} alt={home} className="h-8 w-8" />
              </button>
              <p className="font-bold text-sm">Home</p>
            </div>
          </Link>
          <div className="text-center">
            <button>
              <img src={explore} alt={explore} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Explore</p>
          </div>
          <div className="text-center">
            <button>
              <img src={cart} alt={cart} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Cart</p>
          </div>
          <Link to='/Offer'>
            <div className="text-center">
              <button>
                <img src={offer} alt={offer} className="h-8 w-8" />
              </button>
              <p className="font-bold text-sm">Offer</p>
            </div>
          </Link>
          <div className="text-center">
            <button>
              <img src={account} alt={account} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">Account</p>
          </div>
      </div>
    );
}

export default Footer;