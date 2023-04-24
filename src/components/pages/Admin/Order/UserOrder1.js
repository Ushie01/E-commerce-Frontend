import { useParams } from "react-router-dom";
import { getSingleUser } from "../../../../helper/api";
import { useEffect, useState } from "react";
import UserOrderBoard from "../../../componentsItem/TableRow/userOrderBoard";
import Loader from "../../../componentsItem/Loading/Loader";


const UserOrder1 = () => {
	const { id } = useParams();
	const [order, setOrder] = useState([]);

    const getUserOrder = async (id) => {
        const res = await getSingleUser(id);
        setOrder(res.data.orders);
    }

    useEffect(() => {
        getUserOrder(id)
	}, [id]);
	
    return (
		<div className='p-3 bg-slate-300'>
			<p className='text-2xl font-bold'>User Orders</p>
            {order?.map((value, index) => (
                <div className="flex flex-col items-center justify-center">
                    <div className="p-2 bg-white rounded-lg mt-6">
                        <p className="text-black font-extrabold text-md">{index + 1}</p>
                    </div>
                	<UserOrderBoard order={value} index={index} />
                </div>
            ))}
			{!order && <Loader />}
		</div>
	);
}

export default UserOrder1;