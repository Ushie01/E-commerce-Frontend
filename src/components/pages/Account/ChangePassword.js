import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../Hooks/useToast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "../../../Hooks/useUser";
import { userUpdatePassword } from "../../../helper/api";
import { validateChangePassword } from "../../../utils/validateInfo";
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import lock from "./../../../assets/lock.svg";
import Input from "./../../../components/componentsItem/Input";


const ChangePassword = () => {
  const [passwordCurrent, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const { user } = useUser('user');
  const userDetail = user?.data?.user;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const values = { 
      id: userDetail.id,
      passwordCurrent,
      password,
      confirmPassword
    };

    const validationError = validateChangePassword(values);
    setErr(validationError);

    const payload = await userUpdatePassword(values);
    if (payload.status === "success") {
      Toast({
        text: 'Request successfull!! 🦅✨',
        position: 'top-right',
      });
      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate('/Account/Profile')
      }, 3000);
    } else {
      Toast({
        text: 'Request Failed!! 💥💤',
        position: 'top-right',
      });
    }
  }
  
    return (
      <>
        <div className="">
          <div>
            <ToastContainer />
          </div>
          <Navbar2
            text="Account/ChangePassword"
            image={arrow}
            linkRoute='/Account/Profile'
          />
            <div className="flex flex-col items-start justify-start space-y-6 p-4">
              <label className="text-md font-bold">Current Password:</label>
              <Input
                placeholder={"Password"}
                image={lock}
                type="password"
                widthLength={"w-full"} 
                value={passwordCurrent}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
           {err?.passwordCurrent && <p className='text-red-600 text-md font-bold pl-5'>{err.passwordCurrent}</p>}

            <div className="flex flex-col items-start justify-start space-y-6 p-4">
              <label className="text-md font-bold">New Password:</label>
              <Input
                placeholder={"Password"}
                image={lock}
                type="password" 
                widthLength={"w-full"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          {err?.password && <p className='text-red-600 text-md font-bold pl-5'>{err.password}</p>}
          
          <div className="flex flex-col items-start justify-start space-y-6 p-4">
            <label className="text-md font-bold">Confirm New Password:</label>
            <Input
              placeholder={"Password"}
              image={lock}
              type="password"
              widthLength={"w-full"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {err?.confirmPassword && <p className='text-red-600 text-md font-bold pl-5'>{err?.confirmPassword}</p>}

            <div className="flex flex-auto fixed left-0 right-0 bottom-5 p-4">
              <Button
                text={"SAVE"}
                className="m-auto"
                bgColor={"red"}
                textColor={"white"}
                onClick={(e) => {handleSubmit(e)}}
              />
            </div>
        </div>
      </>
    );
}

export default ChangePassword;