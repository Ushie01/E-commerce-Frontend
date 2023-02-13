import { Link } from "react-router-dom";
import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";
import rigthArrow from "./../../../assets/right-arrow.svg";
import gender from "./../../../assets/female.svg";
import calendar from "./../../../assets/calendar.svg";
import email from "./../../../assets/envelope.svg";
import phone from "./../../../assets/phone.svg";
import lock from "./../../../assets/lock.svg";


const Profile = () => {
    return (
      <>
        <div className="">
          <Navbar2 text={"Account/Profile"} image={arrow} linkRoute='/Account' />
          <div className="m-4">
            <div className="flex flex-row items-center justify-start">
              <div className="h-20 w-20 bg-slate-500 rounded-full"></div>
              <div className="flex flex-col items-start justify-center ml-4">
                <p className="text-md font-extrabold text-md">
                  Rekureku Judith A.
                </p>
                <p className="text-xs text-gray-400">rekureku@gmail.com</p>
              </div>
            </div>
          </div>
          <Link to="/Account/Gender">
            <div className="flex flex-row items-center justify-between text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <div className="flex flex-row items-center justify-start space-x-5">
                <img src={gender} alt={gender} className="h-5 w-5 " />
                <p className="text-sm">Gender</p>
              </div>
              <div className="flex flex-row items-center justify-end space-x-5">
                <p className="text-xs text-gray-300">Male</p>
                <img src={rigthArrow} alt={rigthArrow} className="h-6 w-6 " />
              </div>
            </div>
          </Link>
          <Link to="/Account/Birthday">
            <div className="flex flex-row items-center justify-between text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <div className="flex flex-row items-center justify-start space-x-5">
                <img src={calendar} alt={calendar} className="h-5 w-5 " />
                <p className="text-sm">Birthday</p>
              </div>
              <div className="flex flex-row items-center justify-end space-x-5">
                <p className="text-xs text-gray-300">20-02-2023</p>
                <img src={rigthArrow} alt={rigthArrow} className="h-6 w-6 " />
              </div>
            </div>
          </Link>
          <Link to="/Account/Email">
            <div className="flex flex-row items-center justify-between text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <div className="flex flex-row items-center justify-start space-x-5">
                <img src={email} alt={email} className="h-5 w-5 " />
                <p className="text-sm">Email</p>
              </div>
              <div className="flex flex-row items-center justify-end space-x-5">
                <p className="text-xs text-gray-300">rekureku@mail.com</p>
                <img src={rigthArrow} alt={rigthArrow} className="h-6 w-6 " />
              </div>
            </div>
          </Link>
          <Link to="/Account/PhoneNumber">
            <div className="flex flex-row items-center justify-between text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <div className="flex flex-row items-center justify-start space-x-5">
                <img src={phone} alt={phone} className="h-5 w-5 " />
                <p className="text-sm">Phone Number</p>
              </div>
              <div className="flex flex-row items-center justify-end space-x-5">
                <p className="text-xs text-gray-300">+97 444 555</p>
                <img src={rigthArrow} alt={rigthArrow} className="h-6 w-6 " />
              </div>
            </div>
          </Link>
          <Link to="/Account/ChangePassword">
            <div className="flex flex-row items-center justify-between text-black hover:bg-cyan-100 font-extrabold text-md p-6 space-x-3">
              <div className="flex flex-row items-center justify-start space-x-5">
                <img src={lock} alt={lock} className="h-5 w-5 " />
                <p className="text-sm">Change Password</p>
              </div>
              <div className="flex flex-row items-center justify-end space-x-5">
                <p className="text-xs text-gray-300">*******</p>
                <img src={rigthArrow} alt={rigthArrow} className="h-6 w-6 " />
              </div>
            </div>
          </Link>
        </div>
      </>
    );
}

export default Profile;

