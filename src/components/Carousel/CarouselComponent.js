import Carousel, { CarouselItem } from "./Carousel";
import Timer from "../Timer";
import Shirt1 from "../../assets/1.webp";
import Shirt2 from "../../assets/22.webp";
import Shirt3 from "../../assets/euphorya.jpg";

const image = [Shirt1, Shirt2, Shirt3];
const CarouselComponent = () => {
    return (
      <section className="relative mt-4 h-72">
        <Carousel>
          {image.map((img, index) => (
            <CarouselItem key={index}>
              <div className="m-3 h-72 rounded-lg w-full">
                <img src={img} alt={img} className="h-72 w-full z-60 rounded" />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        <div className="absolute -mt-56 ml-10 text-3xl text-white font-bold">
          <div>
            <p>Flash Sale</p>
            <p>20% Off</p>
          </div>
          <div className="mt-12">
            <Timer />
          </div>
        </div>
      </section>
    )
}

export default CarouselComponent;