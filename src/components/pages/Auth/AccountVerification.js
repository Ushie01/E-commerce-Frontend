import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '../../../Hooks/useToast';
import ReactInputVerificationCode from 'react-input-verification-code';
import { accountVerification, resendToken } from '../../../helper/api';
import { ToastContainer } from 'react-toastify';
import  Button from '../../componentsItem/Button';
import { useUser } from '../../../Hooks/useUser';
import logo from './../../../assets/logo.jpeg';


export default function AccountVerification() {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useUser('user');
  const userEmail = user?.data?.user.email;

  const handleResendToken = async (e) => {
    e.preventDefault();
      const res = await resendToken({email: userEmail});
      if(res.status.includes('success')){
        Toast({
          text: 'A new Token has been sent to your email!! 🦅✨',
          position: 'top-right',
        });  
      }
  }


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
          navigate('/Cart')
        }, 4000);
      } else {
        setIsSubmitted(false)
        Toast({
            text: 'Request failed!! 💥💥',
            position: 'top-left',
        });
        setError(res.message);
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
    <form className='p-4'>
      <div>
        <ToastContainer />
      </div>
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt={logo} className="h-40 w-72 p-3 shadow-md rounded-lg" />
            <p className="text-gray-300 mt-3">Input the 4 digit sent to your email</p>
          </div>
      <div className='flex items-center justify-center mt-10'>
        <ReactInputVerificationCode 
          onChange={setValue}
          value={value}
        />
      </div>
      
      {error && <p className='mt-3 text-center text-red-600 text-sm font-bold'>{error}</p>}
      <div onClick={handleResendToken} className='flex items-center justify-center mt-5'>
        <button className='bg-gray-400 text-white rounded-lg p-2 shadow-xl'>Resend otp</button>
      </div> 

      <div className='flex items-center p-3 fixed bottom-5 left-0 right-0'>
        <Button
          text='Submit'
          onClick={(e) => {handleSubmit(e);}}
          disabled={isSubmitted}
          bgColor='red'
          textColor='white'
        />
      </div>
    </form> 
  )
}