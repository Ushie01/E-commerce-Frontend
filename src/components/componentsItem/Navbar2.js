import { Link } from "react-router-dom";



const Navbar2 = ({text, image, secondImage}) => {
    return (
      <div>
        <div className="flex flex-row items-center justify-between p-7 border-gray-100 border-b-2">
          <div className="flex flex-row">
            {
              image ?
                <Link to="/">
                  <img src={image} alt={image} className="h-5 w-5" />
                </Link>
                :
                ""
            }

            <p className="text-md font-extrabold ml-3">{text}</p>
          </div>
          {
            secondImage ? <img src={secondImage} alt={secondImage} className="h-5 w-5"/> : ""
          }
          
        </div>
      </div>
    );
}

export default Navbar2;