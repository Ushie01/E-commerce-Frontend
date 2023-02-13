import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import phone from "./../../../assets/phone.svg";
import Input from "./../../../components/componentsItem/Input";

const PhoneNumber = () => {
  return (
    <>
      <div className="">
        <Navbar2
          text="Account/ChangePassword"
          image={arrow}
          linkRoute="/Account"
        />
        <div className="flex flex-col items-start justify-start space-y-6 p-4">
          <label className="text-md font-bold">Phone Number:</label>
          <Input
            placeholder={"Password"}
            image={phone}
            type="number"
            width={"w-full"}
          />
        </div>
        <div className="flex flex-auto fixed left-0 right-0 bottom-5">
          <Button text={"SAVE"} className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default PhoneNumber;
