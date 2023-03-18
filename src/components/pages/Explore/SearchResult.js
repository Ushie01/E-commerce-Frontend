import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAllProduct } from '../../../Hooks/useProduct';
import Navbar from '../../componentsItem/Navbar';
import sort from '../../../assets/sort-down.svg';
import funnel from '../../../assets/funnel.svg';
import SaleSection from '../Home/SaleSection';

const SearchResult = () => {
  const { prod } = useParams();
  const products = useAllProduct();
  const [sortBy, setSortBy] = useState('name'); // default sorting order is by name
  const [filter, setFilter] = useState(false);
  console.log(filter);
  let productValue;

  // Check if parameter is a range of prices
  const priceRange = prod.split(',');
  if (priceRange.length === 2 && !isNaN(priceRange[0]) && !isNaN(priceRange[1])) {
    const minPrice = parseInt(priceRange[0]);
    const maxPrice = parseInt(priceRange[1]);
    productValue = products.product?.data.products.filter(
      (value) => value.price >= minPrice && value.price <= maxPrice
    );
  } else {
    // Parameter is a product name
    productValue = products.product?.data.products.filter(
      (value) =>
        value.name.toLowerCase().includes(prod.toLowerCase())
    );
  }

  // Function to update the sorting order
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Sort the products based on the selected sorting order
  // if (sortBy === 'name' || filter === true) {
  //   productValue?.sort((a, b) => a.name.localeCompare(b.name));
  // } else if (sortBy === 'price-asc' || filter === true) {
  //   productValue?.sort((a, b) => a.price - b.price);
  // } else if (sortBy === 'price-desc') {
  //   productValue?.sort((a, b) => b.price - a.price);
  // }

  if (filter === true) {
    productValue?.sort((a, b) => a.price - b.price);
  } else {
    productValue?.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <Navbar
        love={sort}
        notificationBell={funnel}
        thirdLink={'/Filter'}
        image={true}
        filter={filter}
        setFilter={setFilter}
        onImageClick={() => {
          setSortBy('price-asc'); // set the default sorting order to ascending price
        }}
      />
      <div className='flex flex-row items-center justify-between m-3 '>
        <p className='text-gray-400 font-bold'>{`${productValue ? productValue.length : ''} Result`}</p>
        <select name='sort-by' id='sort-by' onChange={handleSortChange}>
          <option value='name'>Sort by name</option>
          <option value='price-asc'>Sort by price (asc)</option>
          <option value='price-desc'>Sort by price (desc)</option>
        </select>
      </div>
      <SaleSection
        products={productValue}
        column={true}
      />
    </div>
  );
};

export default SearchResult;
