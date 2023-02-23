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
