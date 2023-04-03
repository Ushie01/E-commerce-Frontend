import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../Hooks/useToast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userUpdateProfile } from "../../../helper/api";
import { useUser } from "../../../Hooks/useUser";
import { validateEmailUpdate } from "../../../utils/validateInfo";
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import envelope from "./../../../assets/envelope.svg";
import Input from "./../../../components/componentsItem/Input";


const Email = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { user } = useUser('user');
  const userDetail = user?.data?.user;

  const handleSubmit = async () => {
    const values = { id: userDetail._id, email };
    const validationError = validateEmailUpdate(values);
    setErr(validationError);

    if (!validationError && email) {
      const payload = await userUpdateProfile(values);
      if (payload.status) {
        user.data.user.email = values.email;
        localStorage.setItem("user", JSON.stringify(user));
        Toast({
          text: 'Request successfull!! 🦅✨',
          position: 'top-right',
        });
        setEmail("");
        setTimeout(() => {
          navigate('/Account/Profile')
        }, 3000);
      }
    } else {
      Toast({
        text: 'Request Failed',
        position: 'top-right'
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
            text="Account/Email"
            image={arrow}
            linkRoute='/Account/Profile'
          />
          <div className="flex flex-col items-start justify-start space-y-6 p-4">
            <label className="text-md font-bold">Email</label>
              <Input
                placeholder={"Email"}
                widthLength="w-full"
                image={envelope}
                value={email}
                type="email"
                height={"h-12"}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          {err?.email && <p className='text-red-600 text-md font-bold pl-5'>{err.email}</p>}

          <div className="flex flex-auto fixed left-0 right-0 bottom-5">
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

export default Email;