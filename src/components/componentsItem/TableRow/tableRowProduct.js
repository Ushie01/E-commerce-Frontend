import { Link } from "react-router-dom";

const TableRow = ({ product, index, handleDelete }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    
    return (
        <tr
            className=''>
            <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                {index + 1}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product._id}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.brand}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.category}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.collectionsData}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {new Date(
                    product?.createAt.split('T')[0]
                ).toLocaleDateString('en-US', options)}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.description}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.name}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.price}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                <Link
                    to={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${product.productGallery[0]}`}>
                    <div className='w-28'>
                        <img
                            src={`https://ecommerce-backend-3bm2.onrender.com/api/v1/products/${product.productGallery[0]}`}
                            alt={product.productGallery[0]}
                        />
                    </div>
                </Link>
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.ratingsAverage}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.ratingsQuantity}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                {product.size}
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                <Link to={`/Admin/CreateProduct/${product._id}`}>
                    <button className='bg-green-600 pt-3 pb-3 pl-4 pr-4 ml-2 text-white rounded-lg font-bold shadow-2xl'>
                        Edit
                    </button>
                </Link>
            </td>
            <td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
                <button onClick={() => handleDelete(product._id)} className='bg-red-600 p-3 text-white rounded-lg shadow-2xl font-bold'>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default TableRow;