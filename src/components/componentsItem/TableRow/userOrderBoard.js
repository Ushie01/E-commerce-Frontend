import { Link } from "react-router-dom";
const UserOrderBoard = ({ order }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return (
        <>
            <div className='bg-gray-100 w-full mt-3 p-3 rounded-lg font-bold shadow-md'>
                <p className='text-xl '>Destination Address:</p>
                <div className='flex flex-col items-start justify-center space-y-1 text-md font-thin p-3'>
                    <p className='text-gray-400'>
                        - first name:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.firstName}
                        </span>
                    </p>
                    <hr />
                    <p className='text-gray-400'>
                        - last name:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.lastName}
                        </span>
                    </p>
                    <hr />
                    <p className='text-gray-400'>
                        - phone number:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.phoneNumber}
                        </span>
                    </p>
                    <hr />
                    <p className='text-gray-400'>
                        - address:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.address}
                        </span>
                    </p>
                    <hr />
                    <p className='text-gray-400'>
                        - postal code:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.postalCode}
                        </span>
                    </p>
                    <hr />
                    <p className='text-gray-400'>
                        - country:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.country}
                        </span>
                    </p>
                    <hr />
                    <p className='text-gray-400'>
                        - city:{' '}
                        <span className='text-black ml-2'>
                            {order.shippingAddress?.city}
                        </span>
                    </p>
                </div>
            </div>
            <div className='bg-gray-100 w-full mt-5 p-3 rounded-lg font-bold shadow-md'>
                <p className='text-xl '>Order Items:</p>
                {order.orderItems?.map((value, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-start justify-center space-y-1 mt-5 text-md font-thin p-3'>
                        <p className='text-gray-400'>
                            - order id: <span className='text-black ml-2'>{value._id}</span>
                        </p>
                        <p className='text-gray-400'>
                            - product id:{' '}
                            <span className='text-black ml-2'>{value.product._id}</span>
                        </p>
                        <hr />
                        <p className='text-gray-400'>
                            - quantity: <span className='text-black ml-2'>{value.qty}</span>
                        </p>
                        <hr />
                        <p className='text-gray-400'>
                            - price: <span className='text-black ml-2'>{value.price}</span>
                        </p>
                        <hr />
                        <p className='text-gray-400'>
                            - product name:{' '}
                            <span className='text-black ml-2'>{value.product.name}</span>
                        </p>
                        <hr />
                        <p className='text-gray-400'>
                            - product size:{' '}
                            <span className='text-black ml-2'>{value.size}</span>
                        </p>
                        <hr />
                        <p className='text-gray-400'>
                            - product brand:{' '}
                            <span className='text-black ml-2'>{value.product.brand}</span>
                        </p>
                        <hr />
                        <p className='text-gray-400'>
                            - created at:{' '}
                            <span className='text-black ml-2'>
                                {' '}
                                {new Date(
                                    value?.product.createAt.split('T')[0]
                                ).toLocaleDateString('en-US', options)}
                            </span>
                        </p>
                        <hr />
                        <p className='flex flex-row text-gray-400'>
                            - product Image:{' '}
                            <span className='text-black ml-2'>
                                <Link
                                    to={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${value.product?.productGallery[0]}`}>
                                    <div className='w-28 shadow-xl rounded-lg'>
                                        <img
                                            src={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${value.product?.productGallery[0]}`}
                                            alt={value.product?.productGallery[0]}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </Link>
                            </span>
                        </p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserOrderBoard;