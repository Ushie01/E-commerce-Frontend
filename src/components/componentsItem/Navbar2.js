import { Link } from "react-router-dom";
const Navbar2 = ({
  text,
  image,
  secondImage, 
  linkRoute, 
  secondLinkRoute,
  thirdImage 
}) => {
    return (
      <div>
        <div className="flex flex-row items-center justify-between p-7 border-gray-100 border-b-2">
          <div className="flex flex-row">
            {
              image ?
                <Link to={linkRoute}>
                  <img src={image} alt={image} className="h-5 w-5" />
                </Link>
                :
                ""
            }
            <p className="text-md font-extrabold ml-3">{text}</p>
          </div>
          <div className="flex flex-row space-x-4">
            {secondImage ? <Link to={secondLinkRoute}><img src={secondImage} alt={secondImage} className="w-7 h-7" /></Link> : ""}
            {thirdImage ? <img src={thirdImage} alt={thirdImage} className="w-7 h-7" /> : ""}
          </div>
        </div>
      </div>
    );
}
export default Navbar2;