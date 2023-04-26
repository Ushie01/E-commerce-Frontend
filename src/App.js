import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ScreenMsgPage from './components/pages/Explore/ScreenMsgPage';
import Homepage from './components/pages/Home/HomePg';
import FlashSale from './components/pages/Home/FlashSale';
import Notification from './components/pages/Notification/Notification';
import Favorite from './components/pages/Home/Favorite';
import Product from './components/pages/Home/Product';
import ProductReviews from './components/pages/Review/ProductReviews';
import WriteReview from './components/pages/Review/WriteReview';
import Explore from './components/pages/Explore/Explore';
import SearchResult from './components/pages/Explore/SearchResult';
import Category from './components/pages/Explore/Category';
import Filter from './components/pages/Explore/Filter';
import SignIn from './components/pages/Auth/SignIn';
import SignUp from './components/pages/Auth/SignUp';
import Cart from './components/pages/Cart/Cart';
import ShipTo from './components/pages/Cart/ShipTo';
import ScreenMsg from './components/pages/Cart/SuccessMsg';
import Offer from './components/pages/Offer/Offer';
import Account from './components/pages/Account/Account';
import Profile from './components/pages/Account/Profile';
import ChangeName from './components/pages/Account/ChangeName';
import Gender from './components/pages/Account/Gender';
import Birthday from './components/pages/Account/Birthday';
import Email from './components/pages/Account/Email';
import PhoneNumber from './components/pages/Account/PhoneNumber';
import ChangePassword from './components/pages/Account/ChangePassword';
import Order from './components/pages/Order/Order';
import OrderDetails from './components/pages/Order/OrderDetails';
import Address from './components/pages/Address/Address';
import AddAddress from './components/pages/Address/AddAddress';
import MegaSale from './components/pages/Home/MegaSale';
import ForgetPassword from './components/pages/Account/ForgetPassword';
import ResetPasswordToken from './components/pages/Account/ResetPasswordToken';
import ForgetPasswordRes from './components/pages/Account/ForgetPasswordRes';
import AccountVerification from './components/pages/Auth/AccountVerification';
import empty from './assets/x.svg';
// Admin
import { useUser } from './Hooks/useUser';
import UserReviews from './components/pages/Admin/UserReview';
import UserOrder1 from './components/pages/Admin/Order/UserOrder1';
import UserOrder from './components/pages/Admin/Order/UserOrder';
import EditUser from './components/pages/Admin/User/EditUser';
import Admin from './components/pages/Admin/AdminHome';
import Products from './components/pages/Admin/Products/Products';
import Users from './components/pages/Admin/User/Users';
import AdminOrders from './components/pages/Admin/Order/Order';
import CreateProduct from './components/pages/Admin/Products/CreateProduct';;



const App = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const user = useUser('user');
	const currentUser = user?.user?.data?.user?.role;

	return (
		<>
			{isMobile ? (
				<>
					<BrowserRouter className='mobile-only'>
						<Routes>
							<Route
								path='/'
								element={<Homepage />}
							/>
							<Route
								path='Notification'
								element={<Notification />}
							/>
							<Route
								path='Favorite'
								element={<Favorite />}
							/>
							<Route
								path='FlashSale'
								element={<FlashSale />}
							/>
							<Route
								path='MegaSale'
								element={<MegaSale />}
							/>
							<Route
								path='Product/:id'
								element={<Product />}
							/>
							<Route
								path='ProductReviews/:id'
								element={<ProductReviews />}
							/>
							<Route
								path='WriteReview/:id'
								element={<WriteReview />}
							/>
							<Route
								path='Explore'
								element={<Explore />}
							/>
							<Route
								path='SearchResult/:prod'
								element={<SearchResult />}
							/>
							<Route
								path='Category'
								element={<Category />}
							/>
							<Route
								path='Filter'
								element={<Filter />}
							/>
							<Route
								path='SignIn'
								element={<SignIn />}
							/>
							<Route
								path='SignUp'
								element={<SignUp />}
							/>
							<Route
								path='Cart'
								element={<Cart />}
							/>
							<Route
								path='ShipTo'
								element={<ShipTo />}
							/>
							<Route
								path='ScreenPage'
								element={<ScreenMsg />}
							/>
							<Route
								path='Offer'
								element={<Offer />}
							/>
							<Route
								path='Account'
								element={<Account />}
							/>
							<Route
								path='/Account/Profile'
								element={<Profile />}
							/>
							<Route
								path='/Account/ChangeName'
								element={<ChangeName />}
							/>
							<Route
								path='/Account/Gender'
								element={<Gender />}
							/>
							<Route
								path='/Account/Birthday'
								element={<Birthday />}
							/>
							<Route
								path='/Account/Email'
								element={<Email />}
							/>
							<Route
								path='/Account/PhoneNumber'
								element={<PhoneNumber />}
							/>
							<Route
								path='/Account/ChangePassword'
								element={<ChangePassword />}
							/>
							<Route
								path='/Order'
								element={<Order />}
							/>
							<Route
								path='/Order/OrderDetails/:id'
								element={<OrderDetails />}
							/>
							<Route
								path='/Account/Address'
								element={<Address />}
							/>
							<Route
								path='AddAddress/:id'
								element={<AddAddress />}
							/>
							<Route
								path='AddAddress'
								element={<AddAddress />}
							/>
							<Route
								path='/ForgetPassword'
								element={<ForgetPassword />}
							/>
							<Route
								path='/resetPassword/:token'
								element={<ResetPasswordToken />}
							/>
							<Route
								path='/Forgetpassword/Msg/sent'
								element={<ForgetPasswordRes />}
							/>
							<Route
								path='/AccountVerification'
								element={<AccountVerification />}
							/>
							<Route
								path='*'
								element={
									<main>
										<h1 className='text-lg font-extrabold m-5'>
											There's nothing here! <br />
											<Link
												to='/'
												className='text-cyan-600 underline'>
												Click here
											</Link>{' '}
											<br />
											to return to home page.
										</h1>
									</main>
								}
							/>
							<Route
								path='/Admin'
								element={<Admin />}>
								<Route
									index='Products'
									element={<Products />}
								/>
								<Route
									path='Products'
									element={<Products />}
								/>
								<Route
									path='Users'
									element={<Users />}
								/>
								<Route
									path='Orders'
									element={<AdminOrders />}
								/>
								<Route
									path='CreateProduct'
									element={<CreateProduct />}
								/>
								<Route
									path='createProduct/:id'
									element={<CreateProduct />}
								/>
								<Route
									path='EditUser/:id'
									element={<EditUser />}
								/>
								<Route
									path='UserOrder/:id'
									element={<UserOrder />}
								/>
								<Route
									path='UserOrder1/:id'
									element={<UserOrder1/>}
								/>
								<Route
									path='Reviews'
									element={<UserReviews/>}
								/>
							</Route>
						</Routes>
					</BrowserRouter>
				</>
			) : (
				<div className='mt-24'>
					<ScreenMsgPage
						image={empty}
						res={'This site can only be view on mobile devices'}
					/>
				</div>
			)}
		</>
	);
};

export default App;
