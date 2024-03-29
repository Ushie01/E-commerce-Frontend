import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '../../componentsItem/Input';


function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ onSliderChange }) {
  const [value, setValue] = React.useState([20, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onSliderChange(newValue); // call the onSliderChange function with the new value
  };

  return (
    <>
      <div className="m-5">
          <p className="text-md font-bold">Price Range</p>
          <div className="flex flex-row items-center justify-between mt-3">
          <Input
            placeholder="₦2400.00"
            value={`₦${value[0] * 120}.00`}
            width={"w-40"}
          />
          <Input
            placeholder="₦6000.00"
            value={`₦${value[1] * 120}.00`}
            width={"w-40"}
          />
          </div>

          <Box sx={{ width: 350 }} className="m-auto mt-5">
              <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  color="secondary"
              />
          </Box>
          <div className="flex flex-row items-center text-gray-400 text-xl font-bold justify-between">
              <p>Min</p>
              <p>Max</p>
          </div>
      </div>
    </>
  );
};
