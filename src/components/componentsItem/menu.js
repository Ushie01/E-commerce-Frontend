import { Link } from 'react-router-dom';
import menu from '../../assets/admin.svg';

const Menu = ({onClick}) => {
    return (
			<>
				<div className='flex flex-col items-center justify-start transition delay-700 duration-300 ease-in-out h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12'>
					<div className='flex flex-col items-center justify-center p-4 h-40 w-40 rounded-full border-white border-2'>
						<img
							src={menu}
							alt={menu}
							className='h-36 w-36 -mt-4'
						/>
					</div>
					<p className='text-2xl text-white font-bold'>admin</p>
					<div className='flex flex-col items-center justify-center p-6 space-y-5 font-bold text-3xl text-white mt-12'>
						<Link
							to='/Admin/Users'
							onClick={onClick}>
							<p>Users</p>
						</Link>
						<hr className='border-white w-96' />
						<Link
							to='/Admin/Products'
							onClick={onClick}>
							<p>Products</p>
						</Link>
						<hr className='border-white w-96' />
						<Link
							to='/Admin/Users'
							onClick={onClick}>
							<p>Orders</p>
						</Link>
						<hr className='border-white w-96' />
						<p>Reviews</p>
						{/* <hr className='border-white w-96' /> */}
					</div>
				</div>
			</>
		);
}

export default Menu;