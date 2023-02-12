import Navbar2 from "../../componentsItem/Navbar2";
import arrow from './../../../assets/arrow.svg';


const Order = () => {
    return (
      <>
        <Navbar2 image={arrow} text={"Order"} />
        <div className="m-5">
          <div className="p-4 flex flex-col space-y-3 rounded-md border-gray-200 border-2">
            <p className="text-xl font-bold">LQNSU346JK</p>
            <p className="text-gray text-gray-400">Order at Ecomm: August 1, 2023</p>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Order Status</p>
              <p>Shipping</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Items</p>
              <p>2 Items purchased</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Price</p>
              <p className="text-cyan-400 font-bold">₦745.78</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Order;