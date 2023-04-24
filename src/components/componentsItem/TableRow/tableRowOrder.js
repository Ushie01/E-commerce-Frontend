import { useState } from "react";
import { Link } from "react-router-dom";
import { confirmDelivery } from "../../../helper/api";

const TableRow = ({ order, index }) => {
    const [isPaid,] = useState(true);
    const [isDelivered,] = useState(true);

    const adminHandle = async ({ id, payload }) => {
        console.log(id, payload)
    	const resMsg = window.confirm("Action can not be reserved if confirmed!");
		if (resMsg === true) {
            const res = await confirmDelivery({ id, payload });
            if (res.status.includes('success')) {
                window.location.reload('/')
            }   
        }
    }

    const handleConfirm = (id) => {
        const payload = { isDelivered }
        adminHandle({id, payload})
    }

    const handleArriving = (id) => {
        const payload = { isPaid }
        adminHandle({id, payload})
    }

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    
    return (
        <tr>
            <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                {index + 1}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {order._id}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {`₦${order.shippingPrice}`}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {`₦${order.totalPrice}`}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {order.paymentMethod}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {order.user}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {new Date(
                    order?.createdAt.split('T')[0]
                ).toLocaleDateString('en-US', options)}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {order?.isPaid === false ? 'False' : 'True'}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {order?.isDelivered === false ? 'False' : 'True'}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                <Link to={`/Admin/UserOrder/${order._id}`}>
                    <button className="bg-pink-600 text  rounded-lg shadow-xl p-3 text-white font-bold">
                        Order
                    </button> 
                </Link>           
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                <button
                    onClick={() => handleArriving(order._id)}
                    className={`bg-blue-600 rounded-lg shadow-xl p-3 text-white font-bold ${order.isPaid ? 'bg-blue-400' : ''}`}
                    disabled={order.isPaid}
                >
                    Confirm
                </button>
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                <button
                    onClick={() => handleConfirm(order._id)}
                    className={`bg-blue-600 rounded-lg shadow-xl p-3 text-white font-bold ${order.isDelivered ? 'bg-blue-400' : ''}`}
                    disabled={order.isDelivered}
                >
                    Confirm
                </button>
            </td>
        </tr>
    )
}

export default TableRow;