import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateResetPassword } from "../../../utils/validateInfo";
import { resetPassword } from "../../../helper/api";
import { Toast } from '../../../Hooks/useToast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import Input from "./../../../components/componentsItem/Input";

const ResetPasswordToken = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      password,
      confirmPassword
    }

      console.log(token)

    setErr(validateResetPassword(values));
      if (password && confirmPassword) {
          setIsSubmitted(true);
          const payload = await resetPassword(values, token);
          if (payload.error) {
              setIsSubmitted(false)
              Toast({
                  text: 'Request failed!! 💥💥',
                  position: 'top-left',
              });
        } else {
            setIsSubmitted(true)
            Toast({
                text: 'Request successfull!! 🦅✨',
                position: 'top-right',
            });
            setConfirmPassword("");
            setPassword("");
            setTimeout(() => {
            navigate("/")
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
              text="ResetPassword"
              image={arrow} 
              linkRoute='/'
            />
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Password</label>
                    <Input
                        placeholder={"password"}
                        type="password"
                        widthLength={"w-full"}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                {err.password && <p className='text-red-600 text-sm font-bold'>{err.password}</p>}

            </div>
            <div className="flex flex-col items-start justify-start space-y-3 p-4">
                <label className="text-md font-bold">Confirm Password</label>
                    <Input
                        placeholder={"Confirm Password"}
                        type="password"
                        widthLength={"w-full"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
               {err.confirmPassword && <p className='text-red-600 text-sm font-bold'>{err.confirmPassword}</p>}
                
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

export default ResetPasswordToken;