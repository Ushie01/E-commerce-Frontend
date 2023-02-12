import Navbar2 from "../../componentsItem/Navbar2";
import Input from "../../componentsItem/Input";
import Button from "../../componentsItem/Button";


const AddAddress = () => {
    return (
      <>
        <Navbar2 text={"Add Address"} />
        <div className="mb-24">
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Country</label>
                    <Input
                        placeholder={"Country"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">First Name</label>
                    <Input
                        placeholder={"First Name"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Last Name</label>
                    <Input
                        placeholder={"Last Name"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Street Address</label>
                    <Input
                        placeholder={"Street Address"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">
                    Street Address 2 (Optional)
                </label>
                    <Input
                        placeholder={"Street Adress 2 (Optional)"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">State/Province/Region</label>
                    <Input
                        placeholder={"State/Province/Region"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Zip Code</label>
                    <Input
                        placeholder={"Zip Code"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Phone Number</label>
                    <Input
                        placeholder={"Phone Number"}
                        type="text"
                        width={"w-full"}
                    />
            </div>
            
            <div className="flex fixed left-0 right-0 bottom-5">
                <Button text={"Add Address"} />
            </div>
        </div>
      </>
    );
}

export default AddAddress;