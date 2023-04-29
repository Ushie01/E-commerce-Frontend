import { useEffect, useState } from 'react';
import {
    getAllProducts,
    getSingleProduct
} from '../helper/api';


export const useSingleProduct = (id) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getSingleProduct(id)
        .then((data) => setProduct(data))
    }, [id]);
    return { product };
}; 

export const useAllProduct = () => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getAllProducts()
        .then((data) => setProduct(data))
    }, []);
    return { product };
}; 

export function useCart() {
  const [product, setProduct] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const prod = JSON.parse(localStorage.getItem('cart')) || [];
    setProduct(prod);
    const summationPrice = prod.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
    setSum(summationPrice);
  }, []);

  return { product, sum };
}