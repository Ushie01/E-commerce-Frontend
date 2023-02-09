import { Link } from 'react-router-dom';
import account from './../../../assets/account_.svg';
import logo from './../../../assets/logo.jpeg';
import Input from './../../componentsItem/Input';
import Button from './../../componentsItem/Button'
import lock from './../../../assets/lock.svg';
import envelope from './../../../assets/envelope.svg';


const SignUp = () => {
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
              placeholder="Full Name"
              width="w-80"
              height="h-12"
              image={account}
            />
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
            <Input
              placeholder="Confirm Password"
              width="w-80"
              height="h-12"
              image={lock}
            />
          </div>
          <div className="">
            <Button text="Sign Up" />
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