import Button from "./../../componentsItem/Button";
import Counter from "../../componentsItem/Counter";
import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";


const Cart = () => {
    return (
      <>
        <Navbar2 text="Your Cart" image={arrow} />
        <Counter />

        <div className="m-4 flex flex-col items-center justify-center space-y-8 ">
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
              <p className="font-extrabold text-black">Total</p>
              <p className="text-cyan-500 font-extrabold">₦240.00</p>
            </div>
          </div>
          <div className="flex fixed left-0 right-0 bottom-6">
            <Button text="Check Out" />
          </div>
        </div>
      </>
    );
}

export default Cart;