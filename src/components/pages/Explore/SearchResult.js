import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAllProduct } from '../../../Hooks/useProduct';
import ScreenMsgPage from '../Explore/ScreenMsgPage';
import Navbar from '../../componentsItem/Navbar';
import sort from '../../../assets/sort-down.svg';
import funnel from '../../../assets/funnel.svg';
import image from '../../../assets/x.svg';
import SaleSection from '../Home/SaleSection';

const SearchResult = () => {
  const { prod } = useParams();
  const products = useAllProduct();
  const [, setSortBy] = useState('name');
  const [filter, setFilter] = useState(false);
  const [isSearch, setIsSearch] = useState('');


  let productValue;

  const product = (inputValue) => {
    productValue = products.product?.data.products.filter(
      (value) =>
        value.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  // Check if parameter is a range of prices
  const priceRange = prod.split(',');
  if (priceRange.length === 2 && !isNaN(priceRange[0]) && !isNaN(priceRange[1])) {
    const minPrice = parseInt(priceRange[0]);
    const maxPrice = parseInt(priceRange[1]);
    productValue = products.product?.data.products.filter(
      (value) => value.price >= minPrice && value.price <= maxPrice
    );
  } else if (isSearch) {
    product(isSearch)
  } else {
    product(prod)
  }
  
  // Function to update the sorting order
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  if (filter === true) {
    productValue?.sort((a, b) => a.price - b.price);
  } else {
    productValue?.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <>
        <Navbar
          love={sort}
          notificationBell={funnel}
          thirdLink={'/Filter'}
          image={true}
          filter={filter}
          setFilter={setFilter}
          setIsSearch={setIsSearch}
          onImageClick={() => {
            setSortBy('price-asc'); // set the default sorting order to ascending price
          }}
        />
        <div className='flex flex-row items-center justify-between m-3 '>
          <p className='text-gray-400 font-bold'>{`${productValue?.length > 0 ? productValue?.length : '0'} Result`}</p>
          <select name='sort-by' id='sort-by' onChange={handleSortChange}>
            <option value='price-asc'>Sort by brand (asc)</option>
            <option value='price-desc'>Sort by brand (desc)</option>
          </select>
        </div>
        {
          productValue
            ?
            <>
              {
                productValue?.length > 0
                  ?
                  <SaleSection products={productValue} column={true} />
                  :
                  <ScreenMsgPage image={image} res={"No product found"} />  
              }
            </>
            :
            ""
        }
      </>
    </div>
  );
};


export default SearchResult;