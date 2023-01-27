import Navbar from "./../../Navbar";
import Carousel, { CarouselItem } from "../../Carousel/Carousel";
import Shirt1 from "../../../assets/1.webp";
import Shirt2 from "../../../assets/22.webp";
import Shirt3 from "../../../assets/euphorya.jpg"

const image = [Shirt1, Shirt2, Shirt3];


const Homepage = () => {
    return (
        <div>
            <Navbar />
            <hr />
            <div className="mt-4 h-72">
                <Carousel>
                    {image.map((img) => (
                        <CarouselItem>
                            <div className="m-3 h-72 rounded-lg rounded-t-lg w-full">
                                <img src={img} alt={img} className="h-72 w-full  rounded" />
                            </div>
                        </CarouselItem>
                    ))}
              </Carousel>
            </div>
        </div>
    )
}

export default Homepage;