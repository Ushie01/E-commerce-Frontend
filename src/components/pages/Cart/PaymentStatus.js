import { useEffect, useState } from 'react';
import { confirmPayment, postOrder } from '../../../helper/api';
import { useCart } from '../../../Hooks/useProduct';
import ScreenMsgPage from '../Explore/ScreenMsgPage';
import Navbar2 from '../../componentsItem/Navbar2';
import arrow from '../../../assets/arrow.svg';
import check from '../../../assets/check-lg.svg';
import failed from '../../../assets/x.svg';


const PaymentStatus = () => {
	const [selectAddress] = useState(JSON.parse(localStorage.getItem('selectedAddress')) || {});
	const [postOrderCall, setPostOrderCall] = useState(false);
	const params = new URLSearchParams(window.location.search);
	const txRef = params.get('tx_ref');
	const transactionId = params.get('transaction_id');
	const [values, setValues] = useState([]);
	const [cart, setCart] = useState([]);
	const { sum } = useCart();
	let errorRes = '';


	const confirmPaymentFlw = async (id) => {
		const res = await confirmPayment(id);
		setValues(res?.data);
	};

	if (!values) {
		errorRes = 'Error Verifying Payment';
	}

	useEffect(() => {
		confirmPaymentFlw(transactionId);
	}, [transactionId]);

    useEffect(() => {
		const prod = JSON.parse(localStorage.getItem('cart')) || [];
		setCart(prod);
	}, []);


	useEffect(() => {
		const data = {
			shippingAddress: selectAddress,
			shippingPrice: cart.length * 1000,
			totalPrice: sum,
			paymentMethod: 'flw',
			orderItems: cart.map((c) => ({
				qty: c.quantity,
				price: c.price * c.quantity,
				product: c._id,
				size: c.size,
			})),
		};

		if (values?.status === 'successful' && values?.tx_ref === txRef && !postOrderCall) {
			const postOrderApi = async () => {
				const res = await postOrder(data);
				console.log(res);
			};
			setPostOrderCall(true);
			postOrderApi();
		}
	}, [values, txRef, cart, selectAddress, sum, postOrderCall]);


	return (
		<>
			<Navbar2
				image={arrow}
				text='Payment Status'
				linkRoute={`/Cart`}
			/>

			<div className='mt-8'>
				{values?.status === 'successful' &&
					values?.tx_ref === txRef && (
						<ScreenMsgPage
							res='Payment successful'
							image={check}
						/>
					)}
				{values?.status === 'failed' && values?.tx_ref === txRef && (
					<ScreenMsgPage
						res='Payment successful'
						image={failed}
					/>
				)}
				{errorRes && (
					<ScreenMsgPage
						res={errorRes}
						image={failed}
					/>
				)}
			</div>
		</>
	);
};

export default PaymentStatus;
