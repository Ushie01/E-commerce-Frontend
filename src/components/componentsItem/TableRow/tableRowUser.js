import { Link } from "react-router-dom";

const TableRow = ({ index, user, handleDelete }) => {
    return (
        <>
            <tr key={index}>
                <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                    {index + 1}
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
                    <Link to={`/Admin/UserOrder1/${user._id}`}>
                        <button className='bg-yellow-300 p-3 text-white rounded-lg font-bold shadow-2xl'>
                            Order
                        </button>
                    </Link>
                </td>
                <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                    <Link to={`/Admin/EditUser/${user._id}`}>
                        <button className='bg-green-600 pt-3 pb-3 pl-4 pr-4 ml-2 text-white rounded-lg font-bold shadow-2xl'>
                            Edit
                        </button>
                    </Link>
                </td>
                <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                    <button onClick={() => handleDelete(user._id)} className='bg-red-600 p-3 text-white rounded-lg shadow-2xl font-bold'>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default TableRow;