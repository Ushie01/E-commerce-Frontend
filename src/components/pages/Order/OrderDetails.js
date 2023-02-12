// import progressStageBar from "../../componentsItem/progressStageBar";
import Navbar2 from "../../componentsItem/Navbar2";
import Counter from "../../componentsItem/Counter";
import Button from "../../componentsItem/Button";
import check from "./../../../assets/check-lg.svg";
import arrow from "./../../../assets/arrow.svg";

const OrderDetails = () => {
  const ship = "Shipping";
  const arrive = "Arriving";
  const success = "Success";
  return (
    <>
      <Navbar2 text={"Order Details"} image={arrow} />
      <div className="m-2 mt-7 mb-6">
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-9 w-9 text-3xl bg-cyan-400 shadow-2xl rounded-full">
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>
          <hr className={`h-1 w-14 ${ship ? "bg-cyan-400" : "bg-gray-400"}`} />
          <div
            className={`flex h-9 w-9 text-3xl ${
              ship ? "bg-cyan-400" : "bg-gray-400"
            } shadow-2xl rounded-full`}
          >
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>{" "}
          <hr
            className={`h-1 w-14 ${arrive ? "bg-cyan-400" : "bg-gray-400"}`}
          />
          <div
            className={`flex h-9 w-9 text-3xl ${
              arrive ? "bg-cyan-400" : "bg-gray-400"
            } shadow-2xl rounded-full`}
          >
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>{" "}
          <hr
            className={`h-1 w-14 ${!success ? "bg-cyan-400" : "bg-gray-400"}`}
          />
          <div
            className={`flex h-9 w-9 text-3xl ${
              !ship ? "bg-cyan-400" : "bg-gray-400"
            } shadow-2xl rounded-full`}
          >
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>
        </div>
        <div className="flex flex-row items-center text-gray-400 justify-center space-x-8 m-5">
          <p>Packing</p>
          <p>Shipping</p>
          <p>Arriving</p>
          <p>Success</p>
        </div>
        <div>
          <p className="text-md m-5 font-extrabold mt-5">Product</p>
          <Counter />
          <p className="text-md m-5 font-extrabold mt-5">Shipping Details</p>
          <div className="p-4 flex flex-col space-y-3 rounded-md m-5 border-gray-200 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Date Shipping</p>
              <p>July 27, 2020</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p>DHL Regular</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Ref. No</p>
              <p>00c373db847e78ca7</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400 w-1/2">Address</p>
              <p className="w-1/2">
                No 185 plam street ext calabar south, calabar, cross river,
                state
              </p>
            </div>
          </div>
          <p className="text-md m-5 font-extrabold mt-5">Payment Details</p>
          <div className="p-4 flex flex-col space-y-3 rounded-md m-5 border-gray-200 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Items (3)</p>
              <p>₦598.00</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p>₦40.00</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Import Charges</p>
              <p>₦128.00</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Total Price</p>
              <p className="text-cyan-400 font-bold">₦745.78</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <Button text={"Notify Me"} />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
