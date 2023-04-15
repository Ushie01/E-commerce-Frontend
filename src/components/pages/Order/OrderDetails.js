import { useParams } from "react-router-dom";
import { getSingleUserOrder } from "../../../helper/api";
import { Toast } from "../../../Hooks/useToast";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from "../../componentsItem/Navbar2";
import Loader from "../../componentsItem/Loading/Loader";
import CounterComponent from "../../componentsItem/CounterComponent";
import Button from "../../componentsItem/Button";
import check from "./../../../assets/check-lg.svg";
import arrow from "./../../../assets/arrow.svg";
import { useEffect, useState } from "react";


const OrderDetails = () => {
  const orderId = useParams();
  const [order, setOrder] = useState();
	const options = { month: 'long', day: 'numeric', year: 'numeric' };

  const getUserOrder = async (orderId) => {
    const res = await getSingleUserOrder(orderId.id);
    setOrder(res);
  }

  const handleClick = () => {
    Toast({
        text: 'Request Received!! 🦅✨',
        position: 'top-right',
    });
  }

  useEffect(() => {
    getUserOrder(orderId)
  }, [orderId]);

  return (
    <>
      <Navbar2
        text={"Order Details"} 
        image={arrow}
        linkRoute="/Order"
      />
      <div>
        <ToastContainer />
      </div>
      {
        order
          ?
      <div className="m-2 mt-7 mb-6">
        <div className="flex flex-row items-center justify-center">
          <div className="flex h-9 w-9 text-3xl shadow-lg bg-cyan-400 rounded-full">
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>
          <hr className={`h-1 w-14 ${order?.data?.order?.isPaid === true ? "bg-cyan-400" : "bg-gray-400"}`} />
          
          <div
            className={`flex h-9 w-9 text-3xl ${
              order?.data?.order?.isPaid === true ? "bg-cyan-400 shadow-lg" : "bg-gray-400"
            } shadow-2xl rounded-full`}
          >
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>{" "}
          <hr
            className={`h-1 w-14 ${order?.data?.order?.isPaid === true ? "bg-cyan-400" : "bg-gray-400"}`}
          />
          
          <div
            className={`flex h-9 w-9 text-3xl ${
              order?.data?.order?.isDelivered === true ? "bg-cyan-400 shadow-lg" : "bg-gray-400"
            } shadow-2xl rounded-full`}
          >
            <img src={check} alt={check} className="m-auto h-6 w-6" />
          </div>
        </div>
       
        <div className="flex flex-row items-center text-gray-400 justify-center space-x-8 m-5">
          <p>Packing</p>
          <p>Arriving</p>
          <p>Success</p>
        </div>
       
        <div>
          <p className="text-md m-5 font-extrabold mt-5">Product</p>
          {
            order?.data?.order.orderItems?.map((value, index) => (
              <div key={index}>
                <CounterComponent
                  image={value?.product?.productGallery[0]}
                  name={value?.product?.name}
                  price={value.price} 
                />
              </div>
            ))
          }
          <p className="text-md m-5 font-extrabold mt-5">Shipping Details</p>
          <div className="p-4 flex flex-col space-y-3 rounded-md m-5 border-gray-200 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Date Shipping</p>
              <p>{new Date(order?.data?.order.createdAt.split('T')[0]).toLocaleDateString('en-US', options)}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p>DHL Regular</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Ref. No</p>
              <p>{order?.data?.order?._id}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400 w-1/2">Address</p>
              <p className="w-1/2 flex justify-end">
                {order?.data?.order?.shippingAddress?.address}
              </p>
            </div>
          </div>
          <p className="text-md m-5 font-extrabold mt-5">Payment Details</p>
          <div className="p-4 flex flex-col space-y-3 rounded-md m-5 border-gray-200 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">{`Items (${order?.data?.order.orderItems.length})`}</p>
              <p>{`₦${parseFloat(order?.data?.order?.totalPrice - order?.data?.order?.shippingPrice).toLocaleString()}.00`}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p>{`₦${parseFloat(order?.data?.order?.shippingPrice).toLocaleString()}.00`}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-400">Total Price</p>
              <p className="text-cyan-400 font-bold">{`₦${parseFloat(order?.data?.order?.totalPrice).toLocaleString()}.00`}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <Button 
            onClick={handleClick}
            text={"Notify Me"} 
            bgColor={'red'}
            textColor={"white"}
          />
        </div>
      </div>
      :
      <Loader />
      }
    </>
  );
};

export default OrderDetails;
