import { useAllUser } from "../../../Hooks/useUser";

const Users = () => {
	const allUser = useAllUser();
	const users = allUser?.user?.data?.users;
	console.log(users)

    return (
			<div className='p-4'>
				<p className='text-2xl font-bold mt-3'>Users:</p>
				<div className='overflow-x-auto mt-3'>
					<table className=''>
						<thead className=''>
							<tr>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									No.
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									UserId
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Name
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Email
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Phone
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Orders
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Update
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Delete
								</th>
							</tr>
						</thead>
						<tbody>
							{users?.map((user, index) => (
								<tr key={index}>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										{index}
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										{user._id}
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										{user.name}
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										{user.email}
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										{user.phoneNo}
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										<button className='bg-yellow-300 p-3 text-white rounded-lg font-bold shadow-2xl'>
											Order
										</button>
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										<button className='bg-green-600 pt-3 pb-3 pl-4 pr-4 ml-2 text-white rounded-lg font-bold shadow-2xl'>
											Edit
										</button>
									</td>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										<button className='bg-red-600 p-3 text-white rounded-lg shadow-2xl font-bold'>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
}

export default Users