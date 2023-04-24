import { useEffect, useState } from "react";
import { getAllOrder } from "../../../../helper/api";
import TableRow from "../../../componentsItem/TableRow/tableRowOrder";
import Input from "../../../componentsItem/Input";
import Loader from '../../../componentsItem/Loading/Loader';



const AdminOrder = () => {
    const [orders, setOrders] = useState([]);
    const [inputText, setInputText] = useState("");
    const uniqueOrders = [];
    const getOrders = async () => {
        const res = await getAllOrder();
        setOrders(res.data.data);
    }

    orders?.forEach((order) => {
        if (
                order.user.toLowerCase().includes(inputText.toLowerCase()) ||
                order._id.toLowerCase().includes(inputText.toLowerCase()) 
            ) {
                const index = uniqueOrders.findIndex(
                    (p) => p._id === order._id
                );
                if (index === -1) {
                    uniqueOrders.push(order);
                }
            }
    });

    console.log(uniqueOrders);

    useEffect(() => {
        getOrders()
    }, []);

    return (
        <div className="p-3">
            <p className="text-2xl font-bold">Order:</p>
            	<div className='mt-8'>
					<Input
						placeholder={'Search Order by orderId and userId'}
						type='text'
						widthLength={'w-full'}
						name='inputText'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
				</div>
				<p className='mt-3 text-sm text-gray-400'>
					{`${
						uniqueOrders ? uniqueOrders.length : orders.length
					} Available Product`}
				</p>
            <div className="overflow-x-auto mt-3">
                <table>
                    <thead>
                        <tr>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                No.
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Order Id
                            </th>

                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Shipping Price
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Total Price
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Payment Method
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                UserId
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Created At
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Arriving 
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Delivered
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                View Order
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Confirm Arriving
                            </th>
                           <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Confirm Delivered
                            </th>
                        </tr> 
                    </thead>
                    
						{!uniqueOrders ? (
							<tbody>
								{orders?.map((order, index) => (
									<TableRow
										order={order}
                                        key={index}
										index={index}
									/>
								))}
							</tbody>
						) : (
							<tbody>
								{uniqueOrders?.map((order, index) => (
									<TableRow
										order={order}
                                        key={index}
										index={index}
									/>
								))}
							</tbody>
						)}
                </table>
				{(!orders || !uniqueOrders) && <Loader />}
            </div>
        </div>
    )
}

export default AdminOrder;