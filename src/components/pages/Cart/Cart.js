import Navbar2 from "../../componentsItem/Navbar2";
import arrow from "./../../../assets/arrow.svg";


const Cart = () => {
    return (
      <>
        <Navbar2 text="Your Cart" image={arrow} />
        <div className="flex flex-row items-center justify-between m-4 p-3 border-gray-200 border-2">
          <div className="w-28 h-12 border-gray-200 border-2"></div>
          <div className="w-36 h-12 border-gray-200 border-2"></div>
          <div className="w-32 h-12 border-gray-200 border-2"></div>
        </div>
      </>
    );
}

export default Cart;