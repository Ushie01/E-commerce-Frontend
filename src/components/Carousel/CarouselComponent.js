import Carousel, { CarouselItem } from "./Carousel";
import { Link } from "react-router-dom";
import Timer from "../componentsItem/Timer";
import Loader from "../componentsItem/Loading/Loader";
import collection from "../../assets/collection.jpg";


const CarouselComponent = ({ image, value, mapCarosel, circleClick }) => {
  return (
    <section className="relative h-72">
      <>
        {
          image
            ?
            <>
            {
            mapCarosel
            ?
          <Carousel circleClick={circleClick}>
            {image.map((img, index) => (
              <CarouselItem key={index}>
                <div className="m-2 h-72 rounded-lg w-full">
                  <Link to={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${img}`}>
                    <img
                      src={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${img}`}
                      alt={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${img}`}
                      className="h-72 w-full z-60 rounded brightness-90"
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
          :
          <div className="flex items-center justify-centerm-8 h-72 rounded-lg w-full">
            <img
              src={collection}
              alt={collection}
              className="h-60 w-full m-4 z-60 rounded-lg bg-gradient-to-r from-green-400 to-blue-500"
            />
          </div>
      }
      {
        value === true 
        ?
        <div className="absolute -mt-56 ml-10 text-3xl text-white font-bold">
            <div className="text-cyan-400 font-extrabold">
                <p>Flash Sale</p>
                <p>20% Off</p>
            </div>
            <div className="mt-12">
                <Timer />
            </div>
        </div>
        :
        ""
      }
      </>
      :
      <Loader />
        }
      </>
    </section>
  )
}

export default CarouselComponent;