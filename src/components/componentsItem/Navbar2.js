import { Link } from "react-router-dom";



const Navbar2 = ({text, image, secondImage}) => {
    return (
      <div>
        <div className="flex flex-row items-center justify-between p-7 border-gray-100 border-b-2">
          <div className="flex flex-row">
            <Link to="/">
              <img src={image} alt={image} className="h-7 w-7" />
            </Link>
            <p className="text-xl font-bold ml-3">{text}</p>
          </div>
          {
            secondImage ? <img src={secondImage} alt={secondImage} className="h-9 w-9"/> : ""
          }
          
        </div>
      </div>
    );
}

export default Navbar2;