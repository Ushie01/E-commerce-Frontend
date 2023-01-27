import { Link } from 'react-router-dom';
import search from './../assets/search.svg';


const input = () => {
    return (
      <div className="flex flex-row rounded-md items-center justify-center space-x-2 border-2 w-72">
        <Link to="/" className="h-8 w-8 ml-2 mt-3">
          <img src={search} alt={search} />
        </Link>
        <input
          type="search"
          className="h-12 w-48  text-xs border-white ml-1 font-black"
          placeholder="Search Product"
        />
      </div>
    );
}

export default input;