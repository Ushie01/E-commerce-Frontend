import Star from "../../componentsItem/Star";
import { Link } from "react-router-dom";
import deleteSvg from "./../../../assets/delete.svg";
import Loading from "./../../componentsItem/Loading/Loader";


const SaleSection = ({
  products,
  deleteBin,
  column,
  star
}) => {
  return (
    <>
      <div
        className={`${
          column === true
          ?
          "grid grid-cols-2 gap-3 items-start justify-start"
          : "flex"
          } m-3 items-center justify-start space-x-2 overflow-x-auto scrollbar-hide category`
        }
      >
        {
          products
            ?
            products.map((value, index) => (
              <div
                className={`${column === true ? "h-80" : "text-sm h-72 flex items-center justify-center"} border-gray-100 border-2 rounded-xs`}
                key={index}
              >
              <Link to={`/Product/${value._id}`}>
                <div className={`${column === true ? "w-full" : "w-36"}`}>
                  <div>
                    <img
                      src={`http://localhost:5000/api/v1/products/${value.productGallery[0]}`}
                      alt={`http://localhost:5000/api/v1/products/${value.productGallery[0]}`}
                      className={`pl-1 pr-1 m-auto`}
                    />
                    </div>
                    <div className="p-1 -space-y-1">
                      <h3 className="font-extrabold text-xs break-all p-1 mt-2">{value.name}</h3>
                          {
                            star
                              ?
                              <Star 
                                value={value?.ratingsQuantity} 
                                starSize='w-4 h-4'
                              />
                              :
                              ""
                          }
                      <h3 className="p-1 font-extrabold break-all textColor">
                        {`₦${parseFloat(value.price).toLocaleString()}.00`}
                      </h3>
                      <div className="flex flex-row p-1 items-start justify-between">
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
