import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.jpeg'
import Input from './../../componentsItem/Input';
import Button from './../../componentsItem/Button'
import lock from './../../../assets/lock.svg';
import apple from "./../../../assets/apple.svg";
import google from "./../../../assets/google.png";
import envelope from './../../../assets/envelope.svg';


const SignIn = () => {
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
            />
            <Input
              placeholder="Password"
              width="w-80"
              height="h-12"
              image={lock}
            />
          </div>
          <div className="">
            <Button text="Sign In" />
          </div>
          <p className="text-gray-400 font-bold">OR</p>
          <div className="space-y-2 w-98">
            <button className="flex flex-row bg-white rounded-md items-center justify-center space-x-2 border-gray-200 border-2 w-80 h-16 font-bold text-gray-400">
              <img src={google} alt={google} className="h-7 w-7" />
              <p>Login with Google</p>
            </button>
            <button className="flex flex-row bg-white rounded-md items-center justify-center space-x-2 border-gray-200 border-2 w-80 h-16 font-bold text-gray-400">
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