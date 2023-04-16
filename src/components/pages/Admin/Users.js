const Users = () => {
    return (
			<div className='p-4'>
				<p className='text-2xl font-bold mt-3'>User:</p>
				<div className='overflow-x-auto mt-3'>
					<table className=''>
						<thead className=''>
							<tr>
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
									Orders
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Phone
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
									Shining Star
								</td>
								<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
									Earth, Wind, Water and Fire
								</td>
								<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
									1975
								</td>
								<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
									Shining Star
								</td>
								<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
									Earth, Wind, Water and Fire
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
}

export default Users