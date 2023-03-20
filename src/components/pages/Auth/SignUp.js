import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '../../../Hooks/useToast';
import { signUp } from '../../../helper/api';
import { useState } from 'react';
import { validateSignUp } from '../../../utils/validateInfo';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../../assets/logo.jpeg';
import lock from './../../../assets/lock.svg';
import Input from './../../componentsItem/Input';
import Button from './../../componentsItem/Button';
import account from './../../../assets/account_.svg';
import envelope from './../../../assets/envelope.svg';


const SignUp = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name,
      email,
      password,
      confirmPassword
    }

    setErr(validateSignUp(values));

    if (name && email && password && confirmPassword) {
      setIsSubmitted(true);
      const payload = await signUp(values);
      if (payload.message) {
        setIsSubmitted(false)
        Toast({
            text: 'Request failed!! 💥💥',
            position: 'top-left',
        });
        setErrMsg("Email already in used");
      } else {
        localStorage.setItem('user', JSON.stringify(payload));
        setIsSubmitted(true)
        Toast({
            text: 'Request successfull!! 🦅✨',
            position: 'top-right',
        });
        setConfirmPassword("");
        setPassword("");
        setErrMsg("");
        setEmail("");
        setName("");
        setTimeout(() => {
          navigate("/")
        }, 6000);
      }
    }
  }


    return (
      <>
        <div className="flex bg-opacity-5  flex-col items-center justify-center space-y-4 mt-10">
          <div className="flex flex-col items-center justify-center space-y-3">
            <img src={logo} alt={logo} className="h-16 w-48" />
            <p className="text-orange-400 font-bold text-2xl">
              Welcome to Euphorya
            </p>
            <p className="text-orange-200">Sign in to continue</p>
          </div>


          <form>
            <div className="space-y-2">
              <Input
                placeholder="Full Name"
                width="w-80"
                height="h-12"
                image={account}
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                type="text"
                testWidth={"text-lg"}
              />
              {err.name && <p className='text-red-600 text-sm font-bold'>{err.name}</p>}

              <Input
                placeholder="Your Email"
                width="w-80"
                height="h-12"
                image={envelope}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                testWidth={"text-lg"}
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
                type="password"
                testWidth={"text-lg"}
              />
              {err.password && <p className='text-red-600 text-sm font-bold'>{err.password}</p>}

              <Input
                placeholder="Confirm Password"
                width="w-80"
                height="h-12"
                image={lock}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                name="confirmPassword"
                type="password"
                testWidth={"text-lg"}
              />
            </div>
            {err.confirmPassword && <p className='text-red-600 text-sm font-bold'>{err.confirmPassword}</p>}
            <div className='flex'>
              {errMsg && <p className='text-red-600 mt-3 m-auto text-sm font-bold'>{errMsg}</p>}
            </div>
          </form>
          
          <div>
            <ToastContainer />
          </div>

          <div className="">
            <Button
              text="Sign Up"
              onClick={(e) => { handleSubmit(e) }}
              disabled={isSubmitted}
              bgColor="red"
              textColor="white"
            />
          </div>

            <div className="flex flex-row items-center justify-between space-x-1">
              <p className="font-thin">Don't have a account?</p>
                <Link to="/SignIn">
                    <p className="text-cyan-500 font-bold">Sign In</p>
                </Link>
            </div>
        </div>
      </>
    );
}

export default SignUp;