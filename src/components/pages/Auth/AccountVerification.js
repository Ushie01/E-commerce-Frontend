import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '../../../Hooks/useToast';
import ReactInputVerificationCode from 'react-input-verification-code';
import { accountVerification } from '../../../helper/api';
import { ToastContainer } from 'react-toastify';
import  Button from '../../componentsItem/Button';
import logo from './../../../assets/logo.jpeg';


export default function AccountVerification() {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    const num = value;
    if (num.toString().length === 4) { 
      console.log(value);
      const res = await accountVerification({otp: value});
      console.log(res);
      if (res.status.includes('success')) {
        Toast({
          text: 'Request successfull!! 🦅✨',
          position: 'top-right',
        });        
        setTimeout(() => {
          navigate('/')
        }, 4000);
      } else {
        setIsSubmitted(false)
        Toast({
            text: 'Request failed!! 💥💥',
            position: 'top-left',
        });
      }
    } else {
      setIsSubmitted(false);
      Toast({
          text: 'Input Value is not up to 4 digit!! 💥💥',
          position: 'top-left',
      });
    }
  };
  
  return (
    <form>
      <div>
        <ToastContainer />
      </div>
      <div className='flex flex-col items-center justify-center mt-10 space-y-3'>
        <img
          src={logo}
          alt={logo}
          className='h-24 w-48'
        />
        <p className='text-orange-400 font-bold text-2xl'>
          Euphorya
        </p>
        <div className='flex flex-col items-center'>
          <p className='text-orange-200'>Input The 4 Digit Sent To Email</p>
          <p className='text-orange-200'>To Activate Your Account</p>
        </div>
        {/* <p className='text-orange-200'>To Activate Your Account</p> */}
      </div>
      <div className='flex items-center justify-center mt-10'>
        <ReactInputVerificationCode 
          onChange={setValue}
          value={value}
        />
      </div>
      <div className='flex items-center justify-center fixed bottom-5 left-0 right-0'>
        <Button
          text='Submit'
          onClick={(e) => {
            handleSubmit(e);
          }}
          disabled={isSubmitted}
          bgColor='red'
          textColor='white'
        />
      </div>
    </form> 
  )
}