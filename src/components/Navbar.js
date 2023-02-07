import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './../components/Input';
import mic from '../assets/mic-fill.svg';



const Navbar = ({love, notificationBell}) => {
  const [isClick, setIsClick] = useState(false);
  const [, setNotClick] = useState(false);
  
  const handleKeyDown = () => {
    setIsClick(true);
  };
  const handleKeyUp = () => {
    setNotClick(true);
    window.location.reload(false);
    // setNotClick({});
  }

    return (
      <nav className="flex flex-row border-gray-100 border-b-2 items-center justify-between w-98 p-3 h-20 bg-white">
        <Input handleKeyDown={handleKeyDown} handleKeyUp={handleKeyUp} />

        {isClick ? (
          <div className='flex flex-row items-end justify-end space-x-4"'>
            <Link to="/Favorite">
              <button>
                <img
                  src={mic}
                  alt={mic}
                  className="h-7 w-7 delay-500 transition duration-700 ease-in-out"
                />
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row items-end justify-end space-x-4">
            <Link to="/Favorite">
              <button>
                <img
                  src={love}
                  alt={love}
                  className="h-7 w-7 transition duration-700"
                />
              </button>
            </Link>
            <Link to="#">
              <button>
                <img
                  src={notificationBell}
                  alt={notificationBell}
                  className="h-7 w-7 ml-2 transition duration-700"
                />
              </button>
            </Link>
          </div>
        )}
      </nav>
    );
}

export default Navbar;
