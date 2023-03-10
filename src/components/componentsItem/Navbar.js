import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './../componentsItem/Input';
import mic from './../../assets/mic-fill.svg';
import search from './../../assets/search.svg';

const Navbar = ({
  love,
  notificationBell,
  value,
  onChange,
}) => {
  const [isClick, setIsClick] = useState(false);
  //Event listener for input key down
  const handleKeyDown = () => {
    setIsClick(true);
  };
  //Event listener for input key up
  const handleKeyUp = () => {
    setIsClick(false);
  }

    return (
      <nav className="flex flex-row border-gray-100 border-b-2 items-center justify-between w-98 p-3 h-20 bg-white">
        <Input
          handleKeyDown={handleKeyDown}
          handleKeyUp={handleKeyUp}
          image={search}
          placeholder={"Search Product"}
          height={"h-12"}
          width={"w-52"}
          value={value}
          onChange={onChange}
        />

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
            <Link to="/Notification">
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
