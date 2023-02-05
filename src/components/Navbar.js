import Input from './Input'; 
import lightSun from '../assets/dark-sun.svg';
import notificationBell from '../assets/notification-bell.svg'

    
const Navbar = () => {
    return (
      <nav className="flex flex-row items-center justify-between w-98 p-3 h-20 bg-white">
        <Input />
        <div className='flex flex-row items-end justify-end space-x-4'>
          <img src={lightSun} alt={lightSun} className="h-7 w-7" />
          <img
            src={notificationBell}
            alt={notificationBell}
            className="h-7 w-7 ml-2"         
          />
        </div>
      </nav>
    );
}

export default Navbar;
