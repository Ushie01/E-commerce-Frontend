import { useParams } from "react-router-dom";
import { getUserOrderAdmin } from "../../../../helper/api";
import { useEffect, useState } from "react";
import UserOrderBoard from "../../../componentsItem/TableRow/userOrderBoard";
import Loader from "../../../componentsItem/Loading/Loader";


const UserOrder = () => {
	const { id } = useParams();
	const [order, setOrder] = useState({});
    const getUserOrder = async (id) => {
        const res = await getUserOrderAdmin(id);
        setOrder(res.data.order);
    }

    useEffect(() => {
        getUserOrder(id)
	}, [id]);
	
    return (
		<div className='p-3 bg-slate-300'>
			<p className='text-2xl font-bold'>User Orders</p>
			<UserOrderBoard order={order} />
			{!order && <Loader />}
		</div>
	);
}

export default UserOrder;