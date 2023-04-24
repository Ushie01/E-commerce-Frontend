import { useState } from "react";
import { useAllUser } from "../../../../Hooks/useUser";
import { deleteUser } from "../../../../helper/api";
import TableRow from "../../../componentsItem/TableRow/tableRowUser";
import Loader from "../../../../components/componentsItem/Loading/Loader"
import Input from "../../../componentsItem/Input";


const Users = () => {
	const allUser = useAllUser();
	const users = allUser?.user?.data?.users;
	const [inputText, setInputText] = useState("");
	const uniqueUsers = [];

	users?.forEach((user) => {
	if (
			user.name.toLowerCase().includes(inputText.toLowerCase()) ||
			user.email.toLowerCase().includes(inputText.toLowerCase()) ||
			user._id.toLowerCase().includes(inputText.toLowerCase()) ||
			user.phoneNo.toLowerCase().includes(inputText.toLowerCase()) 
		) {
			const index = uniqueUsers.findIndex(
				(p) => p.name === user.name
			);
			if (index === -1) {
				uniqueUsers.push(user);
			}
		}
    });

	const handleDelete = async (id) => {
		const resMsg = window.confirm("Are you sure you want to delete this user document?!");
		if (resMsg === true) {
		    await deleteUser(id);	
		    window.location.reload('/')
        }
	}

    return (
			<div className='p-3'>
				<p className='text-2xl font-bold mt-3'>Users:</p>
				<div className='mt-8'>
					<Input
						placeholder={'Search User'}
						type='text'
						widthLength={'w-full'}
						name='inputText'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
				</div>
				<p className='mt-3 text-sm text-gray-400'>
					{`${
						uniqueUsers ? uniqueUsers.length : users.length
					} Available User`}
				</p>
				<div className='overflow-x-auto mt-3'>
					<table>
						<thead>
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
						{
							!uniqueUsers
							?
							<tbody>
								{users?.map((user, index) => (
									<TableRow
										user={user}
										key={index}
										index={index}
										handleDelete={handleDelete} 
									/>
								))}
							</tbody>
							:
							<tbody>
								{uniqueUsers?.map((user, index) => (
									<TableRow
										user={user}
										key={index}
										index={index}
										handleDelete={handleDelete} 
									/>
								))}
							</tbody>
						}
					</table>
					{(!users || !uniqueUsers) && <Loader />}
				</div>
			</div>
		);
}

export default Users