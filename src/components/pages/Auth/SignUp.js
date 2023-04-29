import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '../../../Hooks/useToast';
import { signUp } from '../../../helper/api';
import { useState } from 'react';
import { validateSignUp } from '../../../utils/validateInfo';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../../assets/logo.jpeg';
import lock from './../../../assets/lock.svg';
import phone from './../../../assets/phone.svg';
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
	const [phoneNo, setPhoneNo] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const values = {
			name,
			email,
			phoneNo,
			password,
			confirmPassword
		}

		setErr(validateSignUp(values));

		if (name && email && phoneNo && password && confirmPassword) {
			setIsSubmitted(true);
			const payload = await signUp(values);

		    if (!payload.status.includes('success')) {
				setIsSubmitted(false)
				Toast({
					text: 'Request failed!! 💥💥',
					position: 'top-left',
				});
				if (payload.message.includes('phoneNo')) {
					setErrMsg("Phone number already in used");
				}
				if (payload.message.includes('email')) {
					setErrMsg("Email already in used")		
				}
			} else {
				localStorage.setItem('user', JSON.stringify(payload));
				setIsSubmitted(true)
				Toast({
					text: 'Request successfull!! 🦅✨',
					position: 'top-right',
				});
				setConfirmPassword("");
				setPhoneNo("");
				setPassword("");
				setErrMsg("");
				setEmail("");
				setName("");
				setTimeout(() => {
				navigate("/AccountVerification")
				}, 6000);
			}
		}
	}


    return (
			<>
				<div className='p-3'>
					<div>
						<ToastContainer />
					</div>

					<div className="flex flex-col items-center justify-center">
						<img src={logo} alt={logo} className="h-32 w-56 p-3 shadow-md rounded-lg" />
						<p className="text-red-600 text-center font-bold text-2xl p-2 mt-5 rounded-lg">
						    Welcome to Euphorya
						</p>
						<p className="text-gray-300">Sign in to continue</p>
					</div>

					<div className='space-y-2 p-3'>
						<Input
							placeholder='Full Name'
							width='w-80'
							height='h-12'
							image={account}
							onChange={(e) => setName(e.target.value)}
							value={name}
							name='name'
							type='text'
							testWidth={'text-lg'}
						/>
						{err.name && (
							<p className='text-red-600 text-sm font-bold'>{err.name}</p>
						)}

						<Input
							placeholder='Your Email'
							width='w-80'
							height='h-12'
							image={envelope}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							name='email'
							type='email'
							testWidth={'text-lg'}
						/>
						{err.email && (
							<p className='text-red-600 text-sm font-bold'>{err.email}</p>
						)}

						<Input
							placeholder='Phone Number'
							width='w-80'
							height='h-12'
							image={phone}
							onChange={(e) => setPhoneNo(e.target.value)}
							value={phoneNo}
							name='phoneNo'
							type='number'
							testWidth={'text-lg'}
						/>
						{err.phoneNo && (
							<p className='text-red-600 text-sm font-bold'>
								{err.phoneNo}
							</p>
						)}

						<Input
							placeholder='Password'
							width='w-80'
							height='h-12'
							image={lock}
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							name='password'
							type='password'
							testWidth={'text-lg'}
						/>
						{err.password && (
							<p className='text-red-600 text-sm font-bold'>
								{err.password}
							</p>
						)}

						<Input
							placeholder='Confirm Password'
							width='w-80'
							height='h-12'
							image={lock}
							onChange={(e) => setConfirmPassword(e.target.value)}
							value={confirmPassword}
							name='confirmPassword'
							type='password'
							testWidth={'text-lg'}
						/>
					</div>
					{err.confirmPassword && (
						<p className='text-red-600 text-sm font-bold'>
							{err.confirmPassword}
						</p>
					)}
					<div className='flex'>
						{errMsg && (
							<p className='text-red-600 mt-3 m-auto text-sm font-bold'>
								{errMsg}
							</p>
						)}
					</div>

					<div className="flex items-center p-3 mt-2">
						<Button
							text="Sign Up" 
							onClick={(e) => { handleSubmit(e) }}
							disabled={isSubmitted}
							bgColor="red"
							textColor="white"
						/>
					</div>


					<div className='flex flex-col items-center'>
						<p className='font-thin'>Do have an account?</p>
						<Link to='/SignIn'>
							<p className='text-red-600 font-bold'>Sign In</p>
						</Link>
					</div>
				</div>
			</>
		);
}

export default SignUp;