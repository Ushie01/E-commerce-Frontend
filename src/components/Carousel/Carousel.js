import React, { useEffect, useState } from 'react';
import { useSwipeable } from "react-swipeable";
import Circle from "../../assets/circle-fill.svg";
import CircleClick from "../../assets/circle.svg";
// import arrowR from "./arrow-right.svg";
// import arrowL from "./arrow-left.svg"
import './Carousel.css';

// Child Item
export const CarouselItem = ({ children, width }) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

// Parent Item
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1); 
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "1s",
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {/* <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="font-bold text-white"
        >
          <img src={arrowL} alt={arrowL} className="w-20 h-7" />
        </button> */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                index === activeIndex ? (
                  <img
                    src={Circle}
                    alt={Circle}
                    className="h-2 w-2"
                  />
                ) : (
                  ""
                )
              } text-gray-500`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <img src={CircleClick} alt={CircleClick} className="h-2 w-2" />
            </button>
          );
        })}
        {/* <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="font-bold text-white"
        >
          <img src={arrowR} alt={arrowR} className="w-20 h-7" />
        </button> */}
      </div>
    </div>
  );
}

export default Carousel;
