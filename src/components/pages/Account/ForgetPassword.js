import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../../helper/api";
import { Toast } from '../../../Hooks/useToast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import emailImage from "./../../../assets/envelope.svg";
import Input from "./../../../components/componentsItem/Input";



const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmited] = useState(false);
  const navigate = useNavigate();
  console.log(email);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const value = { email }

    if (email) {
      setIsSubmited(true);
      const payload = await forgetPassword(value);
      if (payload.error) {
        setIsSubmited(false);
        Toast({
          text: 'Incorrect email 😥😪',
          position: 'top-left'
        });
      } else {
        setIsSubmited(true);
        Toast({
          text: 'Request successfull!! 🦅✨',
          position: 'top-right',
        });
        setTimeout(() => {
          navigate('/Forgetpassword/Msg/sent')
        }, 2000);
      }
    }
  }
    return (
      <>
        <div>
          <div>
            <ToastContainer />
          </div>
            <Navbar2
              text="ForgetPassword"
              image={arrow} 
              linkRoute='/SignIn'
            />
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Email</label>
                    <Input
                        placeholder={"Email"}
                        type="text"
                        widthLength={"w-full"}
                        name="name"
                        image={emailImage}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
          <div className="flex flex-auto fixed left-0 right-0 bottom-5">
            <Button 
              text={"SEND"}
              className="m-auto"
              bgColor={"red"}
              textColor={"white"}
              onClick={(e) => { handleSubmit(e) }}
              disabled={isSubmitted}
            />
          </div>
        </div>
      </>
    );
}

export default ForgetPassword;