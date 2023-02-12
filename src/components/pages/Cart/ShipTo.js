import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import deleteBin from "../../../assets/delete.svg";
import arrow from "../../../assets/arrow.svg";
import add from "../../../assets/plus_.svg";

const ShipTo = () => {
    return (
      <>
        <Navbar2 image={arrow} text="Ship To" secondImage={add} />
        <div className="m-5">
          <div className="flex flex-col border-gray-100 border-2 p-5 rounded-md space-y-3 ">
            <p className="text-md font-extrabold">Madhusudan Kaliya</p>
            <p className="text-gray-500">
              No 185 palm street palm street extension calabar south, calabar
            </p>
            <p className="text-gray-500">+91 888 888 999</p>
            <div className="flex flex-row items-center">
              <button className="h-12 w-28 text-white shadow-md bg-red-600 rounded-md font-extrabold text-md ">
                {" "}
                Edit
              </button>
              <img src={deleteBin} alt={deleteBin} className="ml-8 h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-auto mt-12 fixed left-0 right-0 bottom-5">
            <Button text="Next" className="m-auto" />
          </div>
        </div>
      </>
    );
}

export default ShipTo;