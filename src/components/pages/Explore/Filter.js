import Navbar2 from "../../componentsItem/Navbar2";
import backButton from "./../../../assets/back.svg"
import SliderBar from "./../../SliderBar/SliderBar";
import Button from './../../componentsItem/Button';


const Filter = () => {
  return (
    <div>
      <Navbar2 image={backButton} text="Filter Search" />
      <SliderBar />
      <div className="flex m-2 items-center mt-12">
        <Button text={"Apply"} className="m-auto"/>
      </div>
    </div>
  );
}

export default Filter;