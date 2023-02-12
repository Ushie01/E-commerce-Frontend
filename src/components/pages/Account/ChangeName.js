import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";


const ChangeName = () => {
    return (
      <>
        <div className="">
          <Navbar2 text="Account/Birthday" image={arrow} />
          <div className="flex flex-col items-start justify-start space-y-6 p-4">
            <label className="text-md font-bold">First Name:</label>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="First Name"
              type="text"
              name="search"
            />
            <label className="text-md font-bold">Last Name:</label>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Last Name"
              type="text"
              name="search"
            />
          </div>
          <div className="flex flex-auto fixed left-0 right-0 bottom-5">
            <Button text={"SAVE"} className="m-auto" />
          </div>
        </div>
      </>
    );
}

export default ChangeName;