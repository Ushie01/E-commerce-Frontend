import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import email from "./../../../assets/envelope.svg";
import Input from "./../../../components/componentsItem/Input";


const Email = () => {
    return (
      <>
        <div className="">
          <Navbar2 text="Account/Email" image={arrow} linkRoute='/Account'/>
          <div className="flex flex-col items-start justify-start space-y-6 p-4">
              <label className="text-md font-bold">Email</label>
                  <Input
                      placeholder={"Email"}
                      image={email}
                      type="email"
                      width={"w-full"}
                  />
          </div>
          <div className="flex flex-auto fixed left-0 right-0 bottom-5">
            <Button text={"SAVE"} className="m-auto" />
          </div>
        </div>
      </>
    );
}

export default Email;