import 'react-toastify/dist/ReactToastify.css';
// import GoogleAuth from './GoogleAuh';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from '../../../Hooks/useToast';
import { signIn } from '../../../helper/api';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { validateSignIn } from '../../../utils/validateInfo';
import logo from './../../../assets/logo.jpeg'
import lock from './../../../assets/lock.svg';
// import apple from "./../../../assets/apple.svg";
import Input from './../../componentsItem/Input';
import Button from './../../componentsItem/Button'
import envelope from './../../../assets/envelope.svg';


const SignIn = () => {
  const [err, setError] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmited] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const values = { email, password };

    setError(validateSignIn(values));

    if (email && password) {
      setIsSubmited(true);
      const payload = await signIn(values);
      console.log(payload);
      if (!payload.status.includes('success')) {
        setIsSubmited(false);
        Toast({
          text: 'Incorrect email or password 😥😪',
          position: 'top-left'
        });
        setErrMsg(payload.message)
      } else {
        localStorage.setItem('user', JSON.stringify(payload));
        setIsSubmited(false);
        Toast({
            text: 'Request successfull!! 🦅✨',
            position: 'top-right',
        });
        setErrMsg("");
        setPassword("");
        setEmail("");
        if (payload?.data?.user?.role.includes('admin')) {
          setTimeout(() => {
            navigate('/Admin')
          }, 3000);
        }

        if (payload?.data?.user?.role.includes('user')) {
          setTimeout(() => {
            navigate('/')
          }, 3000);
        }
      }
    }
  }
  
    return (
      <div className='p-3'>
          <div>
              <ToastContainer />
          </div>
        
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt={logo} className="h-40 w-72 p-3 shadow-md rounded-lg" />
            <p className="text-red-600 text-center font-bold text-2xl p-2 mt-5 rounded-lg">
              Welcome to Euphorya
            </p>
            <p className="text-gray-300">Sign in to continue</p>
          </div>

          <div className="space-y-2 p-3 mt-3">
            <Input
              placeholder="Email"
              widthLength={"w-full"}
              image={envelope}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type={"email"}
            />
            {err.email && <p className='text-red-600 text-sm font-bold'>{err.email}</p>}

            <Input
              placeholder="Password"
              width="w-full"
              height="h-12"
              image={lock}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type={"password"}
            />
            {err.password && <p className=' text-red-600 text-sm font-bold'>{err.password}</p>}
          </div>
          {errMsg && <p className='p-3 text-red-600 text-sm font-bold'>{errMsg}</p>}

          <div className="flex items-center p-3">
            <Button
              text="Sign In" 
              onClick={(e) => { handleSubmit(e) }}
              disabled={isSubmitted}
              bgColor="red"
              textColor="white"
            />
          </div>

          <p className="text-center text-gray-400 font-bold">OR</p>
          
          {/* <div className="flex items-center p-3 space-y-2 w-full">
            <button  className="flex flex-row bg-white rounded-md items-center justify-center space-x-2 border-gray-200 border-2 w-full h-16 font-bold text-gray-400">
              <img src={apple} alt={apple} className="h-7 w-7" />
              <p>Login with Apple</p>
            </button>
          </div> */}
          
          <div className="flex flex-col items-center justify-center text-center ">
            <Link to='/ForgetPassword'>
              <p className="text-red-600 font-bold">Forget Password?</p>
            </Link>
            <div className="flex flex-row items-center justify-between space-x-1">
              <p className="font-thin">Don't have a account?</p>
              <Link to="/SignUp">
                <p className="text-red-600 font-bold">Register</p>
              </Link>
            </div>
          </div>


      </div>
    );
}

export default SignIn;