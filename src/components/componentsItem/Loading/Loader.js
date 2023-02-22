import React from 'react';
import Loading from '../../../assets/loader.gif'

const Loader = () => {
  return (
    <div className="absolute flex z-60">
      <img src={Loading} alt={Loading} className=" m-auto h-10 w-12" />
    </div>
  )
}

export default Loader
