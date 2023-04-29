import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../Hooks/useUser";
import Navbar2 from "../../componentsItem/Navbar2";
import Footer from "../../componentsItem/Footer";
import profile from "../../../assets/account.svg";
import box from "../../../assets/box.svg";
import location from "../../../assets/location.svg";
import lock from "../../../assets/lock.svg";



const Account = () => {
  const { user } = useUser('user');
  const currentUser = user?.data?.user;
  const navigate = useNavigate();
  const handleLogout = () => {
    if (currentUser.name) {
      localStorage.removeItem('user');   
      navigate('/');   
    }
  }
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
          <div onClick={handleLogout} className="flex flex-row items-start justify-start text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
            <img src={lock} alt={lock} className="h-7 w-7 text-balck" />
            <p>Logout</p>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Account;