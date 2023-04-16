import { useAllProduct } from '../../../Hooks/useProduct';
import { Link } from 'react-router-dom';

const Products = () => {
	const allProduct = useAllProduct();
	const products = allProduct?.product?.data?.products;
    console.log(products);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return (
			<div className='p-4'>
                <input type="text" className='' />
				<div className='flex flex-row items-center justify-between'>
					<p className='text-2xl font-bold mt-3'>Products:</p>
					<button className='bg-orange-300 p-3 rounded-lg shadow-lg text-white font-bold'>
						Create Product
					</button>
				</div>
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
									Brand
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Category
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									CollectionsData
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Created At
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Description
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Name
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Price
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Photo
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Ratings Average
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Ratings Quantity
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Size
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Edit
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									Delete
								</th>
							</tr>
						</thead>
						<tbody>
							{products?.map((product, index) => (
								<tr key={index}>
									<td className='p-2 bg-slate-50 border-spacing-2 border border-white'>
										{index}
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
											to={`http://localhost:5000/api/v1/products/${product.productGallery[0]}`}>
											<div className='w-28'>
												<img
													src={`http://localhost:5000/api/v1/products/${product.productGallery[0]}`}
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
};

export default Products;
