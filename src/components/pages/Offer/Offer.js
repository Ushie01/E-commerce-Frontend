import Navbar2 from "../../componentsItem/Navbar2";
import Timer from "../../componentsItem/Timer";
import Footer from "../../componentsItem/Footer";
import eight from '../../../assets/8.jpg';
import nine from '../../../assets/9.jpg';
import five from "../../../assets/5.jpg";
import ten from "../../../assets/10.jpg";

const Offer = () => {
    return (
      <div className="mb-24">
        <Navbar2 text="Offer" />
        <div className="m-3">
          <div className="flex flex-col m-auto text-center items-start justify-start p-5 bg-cyan-300 text-md font-extrabold text-white w-full rounded-md">
            <p>Use Euphorya Coins to </p>
            <p>Get 90% off</p>
          </div>
        </div>

        <div className="m-3">
          <div className="relative flex flex-row rounded-md">
            <img src={five} alt={five} className="w-1/2 h-60 rounded-l-lg" />
            <img src={ten} alt={ten} className="w-1/2 h-60 rounded-r-lg" />
          </div>
        </div>

        <div className="absolute -mt-56 ml-10 text-3xl text-white font-bold">
          <div>
            <p>Super Flash Sale</p>
            <p>90% Off</p>
          </div>
          <div className="mt-12">
            <Timer />
          </div>
        </div>
        
        <div className="m-3">
          <div className="relative flex flex-row rounded-md">
            <img src={eight} alt={eight} className="w-1/2 h-60 rounded-l-lg" />
            <img src={nine} alt={nine} className="w-1/2 h-60 rounded-r-lg" />
          </div>
          <div className="absolute -mt-48 m-5 text-white">
            <h1 className="text-3xl font-bold">90% off Super Mega Sale</h1>
            <h1 className="text-3xl font-bold">Product</h1>
            <p className="mt-10 font-bold">Special birthday for your gee </p>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Offer;