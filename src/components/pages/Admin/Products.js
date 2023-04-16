import { useState } from 'react';
import { useAllProduct } from '../../../Hooks/useProduct';
import Loader from '../../componentsItem/Loading/Loader';
import Input from '../../componentsItem/Input';
import TableRow from '../../componentsItem/tableRow';

const Products = () => {
	const allProduct = useAllProduct();
    const [inputText, setInputText] = useState("");
    const uniqueProducts = [];
	const products = allProduct?.product?.data?.products;

    products?.forEach((product) => {
        if (
                product.name.toLowerCase().includes(inputText.toLowerCase()) ||
                product.brand.toLowerCase().includes(inputText.toLowerCase()) ||
                product.collectionsData
                    .toLowerCase()
                    .includes(inputText.toLowerCase()) ||
                product._id
                    .toLowerCase()
                    .includes(inputText.toLowerCase()) 
            ) {
                const index = uniqueProducts.findIndex(
                    (p) => p.name === product.name
                );
                if (index === -1) {
                    uniqueProducts.push(product);
                }
            }
    });

    return (
			<div className='p-4'>
				<div className='flex flex-row items-center justify-between'>
					<p className='text-2xl font-bold mt-3'>Products:</p>
					<button className='bg-orange-300 p-3 rounded-lg shadow-lg text-white font-bold'>
						Create Product
					</button>
				</div>

				<div className='mt-8'>
					<Input
						placeholder={'Search Product By id, name and brand'}
						type='text'
						widthLength={'w-full'}
						name='inputText'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
				</div>
				<p className='mt-3 text-sm text-gray-400'>
					{`${
						uniqueProducts ? uniqueProducts.length : products.length
					} Available Product`}
				</p>
				<div className='overflow-x-auto mt-3'>
					<table className=''>
						<thead className=''>
							<tr>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									No.
								</th>
								<th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
									ProductId
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
						{!uniqueProducts ? (
							<tbody>
								{products?.map((product, index) => (
									<TableRow
										product={product}
                                        key={index}
                                        index={index}
									/>
								))}
							</tbody>
						) : (
							<tbody>
								{uniqueProducts?.map((product, index) => (
									<TableRow
										product={product}
                                        key={index}
                                        index={index}
									/>
								))}
							</tbody>
						)}
					</table>
					{(!products || !uniqueProducts) && <Loader />}
				</div>
			</div>
		);
};

export default Products;
