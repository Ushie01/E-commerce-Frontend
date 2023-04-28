import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../Hooks/useUser';
import { Toast } from "../../../Hooks/useToast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userUpdateProfile } from '../../../helper/api';
import { validateNameUpdate } from '../../../utils/validateInfo';
import Navbar2 from "../../componentsItem/Navbar2";
import Button from "../../componentsItem/Button";
import arrow from "./../../../assets/arrow.svg";
import phoneImg from "./../../../assets/ALPHA.svg";
import Input from "./../../../components/componentsItem/Input";

const ChangeName = () => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { user } = useUser('user');
  const userDetail = user?.data?.user;

  const handleSubmit = async () => {
    const values = { id: userDetail._id, name };
    const validationError = validateNameUpdate(values);
    setErr(validationError);

    if (validationError && name) {
      const payload = await userUpdateProfile(values);
      if (payload.status) {
        user.data.user.name = values.name;
        localStorage.setItem("user", JSON.stringify(user));
        Toast({
          text: 'Request successful!! 🦅✨',
          position: 'top-right',
        });
        setName("");
        setTimeout(() => {
          navigate('/Account/Profile')
        }, 3000);
      }
    } else {
      // Display an error message to the user
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
          text="Account/ChangeName"
          image={arrow}
          linkRoute="/Account/Profile"
        />
        <div className="flex flex-col items-start justify-start space-y-6 p-4">
          <label className="text-md font-bold">Name:</label>
          <Input
            placeholder={"Name"}
            widthLength="w-full"
            image={phoneImg}
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {err?.name && <p className='text-red-600 text-md font-bold pl-5'>{err.name}</p>}

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
};

export default ChangeName;
