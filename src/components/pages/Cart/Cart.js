import Button from "./../../componentsItem/Button"
import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";
import shirt from "./../../../assets/1.webp";
import deleteBin from "./../../../assets/delete.svg";
import favorite from "./../../../assets/heart-fill.svg";
import dash from "./../../../assets/dash.svg";
import plus from "./../../../assets/plus.svg";


const Cart = () => {
    return (
      <>
        <Navbar2 text="Your Cart" image={arrow} />

        <div className="flex flex-row items-center justify-between m-4 p-3 border-gray-100 border-2">
          <div className="w-28 h-28">
            <img src={shirt} alt={shirt} className="w-28 h-28" />
          </div>
          <div className="flex flex-col items-start justify-start space-y-5 p-2 w-36 h-28 text-md font-bold">
            <p>Men's Regular Fit T-shirt</p>
            <p className="text-cyan-500">₦299.34</p>
          </div>
          <div className="flex flex-col w-32 h-28 p-2 space-y-9">
            <div className="flex flex-row items-center justify-end space-x-3">
              <img src={favorite} alt={favorite} className="h-6 w-6" />
              <img src={deleteBin} alt={deleteBin} className="h-7 w-7" />
            </div>
            <div className="flex flex-row h-9 w-28 border-gray-100 border-2 ">
              <div className="flex flex-auto items-center  h-8 w-1/3">
                <img src={dash} alt={dash} className="h-8 w-8" />
              </div>
              <div className="flex flex-auto h-8 w-1/3 bg-gray-200">
                <p className="m-auto text-gray-500 font-bold">4</p>
              </div>
              <div className="flex flex-auto items-center h-8 w-1/3">
                <img src={plus} alt={plus} className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-3 w-full border-gray border-2 p-3">
            <div className="flex flex-row items-center justify-between w-80">
              <p className="text-gray-400">items (3)</p>
              <p className="">₦240.00</p>
            </div>
            <div className="flex flex-row items-center justify-between w-80">
              <p className="text-gray-400">Shipping</p>
              <p className="">₦40.00</p>
            </div>
            <div className="flex flex-row items-center justify-between w-80">
              <p className="text-gray-400">Import Charges</p>
              <p className="">₦176.00</p>
            </div>
            <div className="flex flex-row items-center justify-between w-80">
              <p className="text-gray-400 font-extrabold text-black">Total</p>
              <p className="text-cyan-500 font-extrabold">₦240.00</p>
            </div>
          </div>
          <Button text="Check Out" />
        </div>
      </>
    );
}

export default Cart;