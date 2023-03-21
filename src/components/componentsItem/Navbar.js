import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAllProduct } from '../../Hooks/useProduct';
import Input from './../componentsItem/Input';
import mic from './../../assets/mic-fill.svg';
import search from './../../assets/search.svg';

const Navbar = ({
  love,
  notificationBell,
  value,
  secondLink,
  thirdLink,
  filter,
  setFilter,
  setIsSearch,
  setIsEnter,
  image
}) => {
    const products = useAllProduct();
    const [isClick, setIsClick] = useState(false);
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();
	const uniqueProducts = [];
  
    products.product?.data.products
		?.filter((value) =>
			value.name.toLowerCase().includes(inputText.toLowerCase())
		)
		.forEach((product) => {
			const index = uniqueProducts.findIndex((p) => p.name === product.name);
			if (index === -1) {
				uniqueProducts.push(product);
			}
		});

	// const handleKeyDownEnter = (event) => {
	// 	if (event.key === 'Enter') {
	// 	// do something with the input value
	// 		setIsEnter(uniqueProducts);
	// 	}
	// };
	
	//Event listener for input key down
	const handleKeyDown = () => {
		setIsClick(true);

	};

	//Event listener for input key up
	const handleKeyUp = () => {
		setIsClick(false);
	}

	//Handle for searching product base on input text
	const onHandleClick = (valueClick) => {
		navigate(`/SearchResult/${valueClick}`);
		setInputText('');
	}

	//Toggling filter by price
	const onHandleFilterClick = () => {
		setFilter(!filter)
	}

    return (
			<div className='flex flex-col'>
				<nav className='flex flex-row border-gray-100 border-b-2 items-center justify-between w-98 p-3 h-20 bg-white'>
					<Input
						handleKeyDown={(e) => {
						handleKeyDown(uniqueProducts); 	
						setIsEnter(uniqueProducts);
						setIsSearch(inputText);
						
						// handleKeyDownEnter(e);
					    }}
					    handleKeyUp={handleKeyUp}
						image={search}
						placeholder={'Search Product'}
						height={'h-12'}
						width={'w-52'}
						value={value}
						onChange={(e) => setInputText(e.target.value)}
					/>

					{isClick ? (
						<div className='flex flex-row items-end justify-end space-x-4"'>
							<Link to='/Favorite'>
								<button>
									<img
										src={mic}
										alt={mic}
										className='h-7 w-7 delay-500 transition duration-700 ease-in-out'
									/>
								</button>
							</Link>
						</div>
					) : (
						<div className='flex flex-row items-end justify-end space-x-4'>
							<>
								{image ? (
									<>
										<button
											className='mb-2'
										    onClick={onHandleFilterClick}	
										>
											<img
												src={love}
												alt={love}
												className='h-7 w-7 transition duration-700'
											/>
										</button>
									</>
								) : (
									<Link to={secondLink}>
										<button>
											<img
												src={love}
												alt={love}
												className='h-7 w-7 transition duration-700'
											/>
										</button>
									</Link>
								)}
							</>
							<Link to={thirdLink}>
								<button>
									<img
										src={notificationBell}
										alt={notificationBell}
										className='h-7 w-7 ml-2 transition duration-700'
									/>
								</button>
							</Link>
						</div>
					)}
				</nav>
				<>
					{inputText ? (
						<>
							{uniqueProducts
								?.filter((value) =>
									value.name.toLowerCase().includes(inputText.toLowerCase())
								)
								.map((value, index) => (
									<div key={index}>
										<div
											className='p-4 hover:bg-gray-100'
											onClick={() => onHandleClick(value?.name)}>
											<p className='text-md font-bold'>{value?.name}</p>
										</div>
										<hr className='border' />
									</div>
								))}
						</>
					) : (
						''
					)}
				</>
			</div>
		);
}

export default Navbar;