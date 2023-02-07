import { Link } from 'react-router-dom';
import search from './../assets/search.svg';


const Input = ({ handleKeyDown, handleKeyUp }) => {
    return (
      <div className="flex flex-row rounded-md items-center justify-center space-x-2 border-gray-100 border-2 w-72">
            <Link to="/" className="h-8 w-8 ml-2 mt-3">
                <img src={search} alt={search} />
            </Link>
            <input
                onKeyDown={handleKeyDown}
                onBlur={handleKeyUp}
                type="search"
                className="h-12 w-48 input text-xs border-white ml-1 font-black"
                placeholder="Search Product"
            />
      </div>
    );
}

export default Input;