import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../Hooks/useUser';
import { getUserOrder } from '../../../helper/api';
import Navbar2 from '../../componentsItem/Navbar2';
import ScreenMsgPage from '../Explore/ScreenMsgPage';
import Loader from '../../componentsItem/Loading/Loader';
import empty from './../../../assets/x.svg';
import arrow from './../../../assets/arrow.svg';

const Order = () => {
	const [order, setOrder] = useState([]);
	const { user } = useUser('user');
	const userId = user?.data?.user?.id;
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	console.log(order);

	const getUserOrders = async (userId) => {
		try {
			const res = await getUserOrder(userId);
			setOrder(res?.data?.data);
		} catch (error) {
			console.error(error);
			setOrder([]);
		}
	};

	useEffect(() => {
		if (userId) {
			getUserOrders(userId);
		}
	}, [userId]);

	return (
		<>
			<Navbar2
				image={arrow}
				text={'Order'}
				linkRoute='/Account'
			/>
			<div>
				{
					order
					?
						<>
						{order.length > 0 ? (
							<>
								{order?.map((orderItem, index) => (
									<Link
										to={`/Order/OrderDetails/${orderItem._id}`}
										key={index}>
										<div className='m-5'>
											<div className='p-4 flex flex-col space-y-3 rounded-md border-gray-200 border-2'>
												<p className='text-xl font-bold'>{`Product Id: ${orderItem._id}`}</p>
												<p className='text-gray text-gray-400'>
													{`Order at Euphorya: ${new Date(
														orderItem?.updatedAt.split('T')[0]
													).toLocaleDateString('en-US', options)}`}
												</p>
												<div>
													<hr className='border-dashed mt-3 mb-3 border-cyan-500' />
												</div>
												<div className='flex flex-row items-center justify-between'>
													<p className='text-gray-400'>Order Status</p>
													<p>Shipping</p>
												</div>
												<div className='flex flex-row items-center justify-between'>
													<p className='text-gray-400'>Items</p>
													<p>{`${orderItem.orderItems.length}`} Items purchased</p>
												</div>
												<div className='flex flex-row items-center justify-between'>
													<p className='text-gray-400'>Price</p>
													<p className='text-cyan-400 font-bold'>{`₦${parseFloat(orderItem.totalPrice).toLocaleString()}.00`}</p>
												</div>
											</div>
										</div>
									</Link>
								))}
							</>
						) : (
							<>					
								<ScreenMsgPage
									res="You haven't added an address"
									direction='Click here to explore'
									image={empty}
									button={true}
									linkRoute='/explore'
									bgColor='cyan'
								/>
							</>
						)}
						</>
					:
					<Loader />
				}
			</div>
		</>
	);
};

export default Order;
