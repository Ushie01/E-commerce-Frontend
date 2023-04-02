// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Hooks/useProduct";
import { useUser } from "../../Hooks/useUser";
import account from "./../../assets/account_.svg";
import account1 from "./../../assets/account.svg";
import cart from "./../../assets/cart.svg";
import cart1 from "./../../assets/cart_.svg";
import explore from "./../../assets/explore.svg";
import explore1 from "./../../assets/explore_.svg";
import home from "./../../assets/home.svg";
import offer from "./../../assets/offer.svg";
import home1 from "./../../assets/home_.svg";
import offer1 from "./../../assets/offer_.svg";



const Footer = () => {
	const pathname = window.location.pathname;
	const { user } = useUser('user');
	const userDetails = user?.data?.user
	const { product } = useCart();
	const navigate = useNavigate();
	
	const handleProfile = (user) => {
		console.log(user);
		if (user) {
			navigate('/Account')
		} else {
			navigate('/SignUp')
		}
	} 

  return (
		<div className='flex flex-row text-gray-500 space-x-2 h-20 w-full p-3 items-center justify-between bg-white fixed left-0 right-0 bottom-0 border-t-2'>
			<Link to='/'>
				<button className='flex flex-col items-center justify-center'>
					<img
						src={`${pathname === '/' ? home1 : home}`}
						alt={offer1}
						className='h-9 w-9'
					/>
					<p
						className={`${
							pathname === '/' ? 'text-black' : ''
						} font-bold text-sm `}>
						Home
					</p>
				</button>
			</Link>

			<Link to='/Explore'>
				<button className='flex flex-col items-center justify-center'>
					<img
						src={`${pathname === '/Explore' ? explore1 : explore}`}
						alt={explore1}
						className='h-9 w-9'
					/>
					<p
						className={`${
							pathname === '/Explore' ? 'text-black' : ''
						} font-bold text-sm `}>
						Explore
					</p>
				</button>
			</Link>

			<Link to='/Cart'>
				<button className='relative flex flex-col items-center justify-center'>
					<div className='flex items-center justify-center absolute w-6 h-6 rounded-full bg-black text-white bottom-10 left-5'>
						<p className='text-xs font-extrabold'>{product.length}</p>
					</div>
					<img
						src={`${pathname === '/Cart' ? cart1 : cart}`}
						alt={cart1}
						className='h-9 w-9'
					/>
					<p
						className={`${
							pathname === '/Cart' ? 'text-black' : ''
						} font-bold text-sm `}>
						Cart
					</p>
				</button>
			</Link>

			<Link to='/Offer'>
				<button className='flex flex-col items-center justify-center'>
					<img
						src={`${pathname === '/Offer' ? offer1 : offer}`}
						alt={offer1}
						className='h-9 w-9'
					/>
					<p
						className={`${
							pathname === '/Offer' ? 'text-black' : ''
						} font-bold text-sm `}>
						Offer
					</p>
				</button>
			</Link>

			<button
				onClick={() => handleProfile(userDetails?.name)}
				className='flex flex-col items-center justify-center'>
				<img
					src={`${pathname === '/Account' ? account1 : account}`}
					alt={account1}
					className='h-9 w-9'
				/>
				<p
					className={`${
						pathname === '/Account' ? 'text-black' : ''
					} font-bold text-sm `}>
					Account
				</p>
			</button>
		</div>
	);
}

export default Footer;