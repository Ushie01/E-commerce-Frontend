import { Link } from "react-router-dom";
import starEmpty from "./../../../assets/star.svg";
import starHalf from "./../../../assets/star-half.svg";
import starFill from "./../../../assets/star-fill.svg";
import deleteSvg from "./../../../assets/delete.svg";
import Loading from "./../../componentsItem/Loading/Loader";


const SaleSection = ({
  products,
  star,
  deleteBin,
  column
}) => {
  return (
    <>
      <div
        className={`${
          column === true
          ?
          "grid grid-cols-2 gap-3 items-center justify-center"
          : "flex"
          } m-3 items-center justify-start space-x-2 overflow-x-auto scrollbar-hide category`
        }
      >
        {

          products
            ?
            products.map((value, index) => (
            <div className={`${column === true ? "p-3 h-96" : "p-1 text-sm"} border-gray-100 border-2 rounded-xs`} key={index}>
            <Link to={`/Product/${value._id}`}>
              <div className={`${column === true ? "w-40" : "w-36"} h-max mt-3`}>
                <div>
                  <img
                    src={`http://localhost:5000/api/v1/products/${value.productGallery[0]}`}
                    alt={`http://localhost:5000/api/v1/products/${value.productGallery[0]}`}
                    className={`${column === true ? "" : "pl-1 pr-1"} m-auto w-full`}
                  />
                </div>
                <h3 className="m-2 font-extrabold break-all">{value.name}</h3>
                {star === true ? (
                  <div className="m-2 flex flex-row items-start justify-start">
                    <img src={starFill} alt={starFill} className="w-4 h-4" />
                    <img src={starFill} alt={starFill} className="w-4 h-4" />
                    <img src={starFill} alt={starFill} className="w-4 h-4" />
                    <img src={starHalf} alt={starHalf} className="w-4 h-4" />
                    <img src={starEmpty} alt={starEmpty} className="w-4 h-4" />
                  </div>
                ) : (
                  ""
                )}
                <h3 className="m-2 font-extrabold break-all textColor">
                  ₦{value.price}
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                  <s className="text-gray-500 text-sm">₦1200</s>
                  <h2 className="font-red text-sm font-bold text-red-700 text-extrabold">
                    25% off
                  </h2>
                  {deleteBin === true ? (
                    <img src={deleteSvg} alt={deleteSvg} className="w-6 h-6" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Link>
          </div>
          ))
          :
          <Loading />
        }
      </div>
    </>
  );
};

export default SaleSection;
