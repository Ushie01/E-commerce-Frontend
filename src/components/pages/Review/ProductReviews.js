import { Link, useParams } from "react-router-dom";
import { useSingleProduct } from "../../../Hooks/useProduct";
import Star from "../../componentsItem/Star";
import Footer from "../../componentsItem/Footer";
import Button from "../../componentsItem/Button";
import Loader from "../../componentsItem/Loading/Loader";
import arrow from "./../../../assets/arrow.svg";
import person from "./../../../assets/account.svg";

const ProductReviews = () => {
  const { id } = useParams();
  const product = useSingleProduct(id);
  const productValue = product.product?.data?.product;
  const productValueDate = new Date(`
    ${productValue?.reviews[0]?.createdAt.split("T")[0]}
  `);

  
  return (
    <div>
      <div className="flex flex-row items-center justify-between border-b-2 p-5">
        <div className="flex flex-row">
          <Link to="/">
            <img src={arrow} alt={arrow} className="h-7 w-7" />
          </Link>
          <p className="text-xl font-bold ml-3">3 Review</p>
        </div>
      </div>

      {
        productValue?.name
          ?
          <>
            {
              productValue?.reviews.map((value, key) => (
                <>
                  <div className="flex flex-row items-start justify-start m-3" key={key}>
                    <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                      <img src={person} alt={person} className="w-12 h-12 m-auto" />
                    </button>
                    <div className="flex flex-col items-start justify-start mt-5 ml-3">
                        <p className="font-bold text-2xl">{value?.user?.name}</p>
                      <div className="flex flex-row">
                        <div className="flex flex-row">
                          <Star value={value.rating} />
                        </div>
                          <p className="text-gray text-xs m-auto ml-3">{`
                            ${productValueDate.toLocaleString('default', { month: 'long' })} 
                            ${productValueDate.getDate()}, 
                            ${productValueDate.getFullYear()}
                          `}
                          </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray m-3 ">{value?.review}</p>
                </>
              ))
            }
          </>
          :
          <div className='flex m-3'>
            <Loader />
          </div>
      }      
      <Link to="/WriteReview" className="flex left-0 right-0 bottom-24">
        <Button text="Write Review" />
      </Link> 
      <Footer />
    </div>
  );
};

export default ProductReviews;
