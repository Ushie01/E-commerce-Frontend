import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from "../../componentsItem/Navbar2";
import backButton from "./../../../assets/arrow.svg"
import SliderBar from "../../componentsItem/SliderBar/SliderBar";
import Button from './../../componentsItem/Button';


const Filter = () => {
  const [sliderValue, setSliderValue] = useState([20, 50]);
  const navigate = useNavigate();

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const onHandleApply = () => {
    navigate(`/SearchResult/${[sliderValue[0] * 120, sliderValue[1] * 120]}`);
  }

  return (
    <div>
      <Navbar2
        image={backButton}
        text="Filter Search"
        linkRoute={"/"}
      />
      <SliderBar onSliderChange={handleSliderChange} />
      <div className="flex fixed left-0 right-0 bottom-5 m-2 items-center mt-12">
        <Button
          text={"Apply"}
          className="m-auto"
          bgColor='red'
          textColor='white'
          onClick={onHandleApply}
        />
      </div>
    </div>
  );
}

export default Filter;
