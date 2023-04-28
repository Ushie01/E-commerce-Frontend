import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateAddress } from "../../../utils/validateInfo";
import { Toast } from "./../../../Hooks/useToast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from "../../componentsItem/Navbar2";
import Input from "../../componentsItem/Input";
import Button from "../../componentsItem/Button";
import backArrow from "./../../../assets/arrow.svg";

const AddAddress = () => {
    const [savedAddresses, setSavedAddresses] = useState(JSON.parse(localStorage.getItem('address')) || []);
    const [country, setCountry] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [err, setErr] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
            const addressResponse = savedAddresses[id];
            if (addressResponse) {
                const { country, firstName, lastName, address, city, postalCode, phoneNumber } = addressResponse;
                setCountry(country);
                setFirstName(firstName);
                setLastName(lastName);
                setAddress(address);
                setCity(city);
                setPostalCode(postalCode);
                setPhoneNumber(phoneNumber);
            }
        }
    }, [id, savedAddresses]);

    const receivedResponse = () => {
        Toast({
            text: 'Your Address Has been Received',
            postion: 'top-right'
        });
        setTimeout(() => {
            navigate("/ShipTo")
            setCountry("");
            setFirstName("");
            setLastName("");
            setAddress("");
            setCity("");
            setPostalCode("");
            setPhoneNumber("");
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const values = {
            country,
            firstName,
            lastName,
            address,
            city,
            postalCode,
            phoneNumber
        }

        const errors = validateAddress(values);
        setErr(errors);

        if (!id) {
            if (            
                country &&
                firstName &&
                lastName &&
                address &&
                city &&
                postalCode &&
                phoneNumber
            ) {
                setIsSubmitted(true);
                const newIndex = savedAddresses.length;
                setSavedAddresses([...savedAddresses, { ...values, index: newIndex }]);
                localStorage.setItem('address', JSON.stringify([...savedAddresses, { ...values, index: newIndex }]));   
                receivedResponse()
            }  
        } else {          
            const updatedAddress = savedAddresses.map((address) =>
                address?.index === Number(id) ? { ...address, ...values } : address
            );
            setSavedAddresses(updatedAddress);
            localStorage.setItem('address', JSON.stringify(updatedAddress));
            receivedResponse();
        }
    };



    return (
        <>
            <div>
                <ToastContainer />
            </div>
                
            <Navbar2
                text={id ? "Edit Address" : "Add Address"} 
                image={backArrow}
                linkRoute={'/ShipTo'}
            />
                
            <div className="mb-12">
                <form>
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">Country</label>
                            <Input
                                placeholder={"Country"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            {err?.country && <p className='text-red-600 text-sm font-bold'>{err.country}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">First Name</label>
                            <Input
                                placeholder={"First Name"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {err?.firstName && <p className='text-red-600 text-sm font-bold'>{err.firstName}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">Last Name</label>
                            <Input
                                placeholder={"Last Name"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {err?.lastName && <p className='text-red-600 text-sm font-bold'>{err.lastName}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">Street Address</label>
                            <Input
                                placeholder={"Street Address"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            {err?.address && <p className='text-red-600 text-sm font-bold'>{err.address}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">State/Province/Region</label>
                            <Input
                                placeholder={"State/Province/Region"}
                                type="text"
                                widthLength={"w-full"}
                                name="name"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            {err?.city && <p className='text-red-600 text-sm font-bold'>{err.city}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">Postal Code</label>
                            <Input
                                placeholder={"Zip Code"}
                                type="number"
                                widthLength={"w-full"}
                                name="name"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                            {err?.postalCode && <p className='text-red-600 text-sm font-bold'>{err.postalCode}</p>}
                    </div>
                    
                    <div className="flex flex-col items-start justify-start space-y-3 p-4">
                        <label className="text-md font-bold">Phone Number</label>
                            <Input
                                placeholder={"Phone Number"}
                                type="number"
                                widthLength={"w-full"}
                                name="name"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            {err?.phoneNumber && <p className='text-red-600 text-sm font-bold'>{err.phoneNumber}</p>}
                    </div>
                    
                    <div className="flex left-0 mt-16 right-0 bottom-5 p-4">
                        <Button 
                            text={"Add Address"}
                            onClick={(e) => { handleSubmit(e) }}
                            disabled={isSubmitted}
                            bgColor='red'
                            textColor='white'
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddAddress;