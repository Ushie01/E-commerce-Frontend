import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
import GoogleAuth from './GoogleAuth';
=======
>>>>>>> c23831efd2f7ca7ffc76074a390743cd9c14b792
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { verifyAccountToast, successToast } from '../../../Hooks/useToast';
import { signIn } from '../../../helper/api';
import { validateSignIn } from '../../../utils/validateInfo';
import logo from './../../../assets/logo.jpeg'
import Input from './../../componentsItem/Input';
import Button from './../../componentsItem/Button'
import lock from './../../../assets/lock.svg';
import apple from "./../../../assets/apple.svg";
import envelope from './../../../assets/envelope.svg';



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitted, setIsSubmited] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const values = {
      email,
      password
    }

    setError(validateSignIn(values));

    if (email && password) {
      setIsSubmited(true);
      const payload = await signIn(values);
      if (payload.message) {
        setIsSubmited(false);
        verifyAccountToast();
        setErrMsg("Incorrent Email or Password")
      } else {
        localStorage.setItem('user', JSON.stringify(payload));
        setIsSubmited(false);
        successToast();
        setErrMsg("");
        setPassword("");
        setEmail("");
        setTimeout(() => {
          navigate('/')
        }, 6000);
      }
    }
  }
    return (
      <>
        <div className="flex flex-col items-center justify-center space-y-4 mt-10">
          
          <div className="flex flex-col items-center justify-center space-y-3">
            <img src={logo} alt={logo} className="h-16 w-48" />
            <p className="text-orange-400 font-bold text-2xl">
              Welcome to Euphorya
            </p>
            <p className="text-orange-200">Sign in to continue</p>
          </div>

          <div className="space-y-2">
            <Input
              placeholder="Your Email"
              width="w-80"
              height="h-12"
              image={envelope}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type={"email"}
            />
            {err.email && <p className='text-red-600 text-sm font-bold'>{err.email}</p>}

            <Input
              placeholder="Password"
              width="w-80"
              height="h-12"
              image={lock}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type={"password"}
            />
            {err.password && <p className='text-red-600 text-sm font-bold'>{err.password}</p>}
          </div>
            {errMsg && <p className='text-red-600 text-sm font-bold'>{errMsg}</p>}
          
          <div>
            <ToastContainer />
          </div>

          <div className="">
            <Button
              text="Sign In" 
              onClick={(e) => { handleSubmit(e) }}
              disabled={isSubmitted}
            />
          </div>

          <p className="text-gray-400 font-bold">OR</p>
          
          <div className="space-y-2 w-98">
            <GoogleAuth />
            <button  className="flex flex-row bg-white rounded-md items-center justify-center space-x-2 border-gray-200 border-2 w-80 h-16 font-bold text-gray-400">
              <img src={apple} alt={apple} className="h-7 w-7" />
              <p>Login with Apple</p>
            </button>
          </div>
          
          <div className="items-center text-center ">
            <p className="text-cyan-500 font-bold">Forget Password?</p>
            <div className="flex flex-row items-center justify-between space-x-1">
              <p className="font-thin">Don't have a account?</p>
              <Link to="/SignUp">
                <p className="text-cyan-500 font-bold">Register</p>
              </Link>
            </div>
          </div>

        </div>
      </>
    );
}

export default SignIn;