import Navbar2 from "../../componentsItem/Navbar2";
import backButton from "./../../../assets/back.svg"
import Input from "../../componentsItem/Input";


const Filter = () => {
    return (
      <div>
        <Navbar2 image={backButton} text="Filter Search" />
        <div className="m-4">
          <p className="text-md font-bold">Price Range</p>
          <div className="flex flex-row items-center justify-between mt-3">
                    <Input
                        placeholder={"₦00.00"}
                        width={"w-44"}
                    />
                    <Input
                        placeholder={"₦00.00"}
                        width={"w-44"}
                    />
          </div>
        </div>
      </div>
    );
}

export default Filter;