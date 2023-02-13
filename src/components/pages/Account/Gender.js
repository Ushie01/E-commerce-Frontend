import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";

const Gender = () => {
  return (
    <>
      <div className="">
        <Navbar2 text="Account/Profile" image={arrow} linkRoute="/Account" />
        <div className="m-4 space-y-4">
          <label className="text-md font-bold">Choose Gender</label>
          <select className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
            <option value="Man" className="w-72">
              Man
            </option>
            <option value="Woman" className="w-72">
              Woman
            </option>
          </select>
        </div>
        <div className="flex flex-auto fixed left-0 right-0 bottom-5">
          <Button text={"SAVE"} className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default Gender;
