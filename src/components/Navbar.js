import { Link } from 'react-router-dom';
import Input from './Input'; 
import Love from '../assets/love.svg';
import notificationBell from '../assets/notification-bell.svg';

    
const Navbar = () => {
    return (
      <nav className="flex flex-row items-center justify-between w-98 p-3 h-20 bg-white">
        <Input />
        <div className="flex flex-row items-end justify-end space-x-4">
          <Link to="/Favorite">
            <button>
              <img src={Love} alt={Love} className="h-7 w-7" />
            </button>
          </Link>
          <Link to="#">
            <button>
              <img
                src={notificationBell}
                alt={notificationBell}
                className="h-7 w-7 ml-2"
              />
            </button>
          </Link>
        </div>
      </nav>
    );
}

export default Navbar;
