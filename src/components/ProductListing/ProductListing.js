import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions'
import ProductComponent from '../ProductComponent/ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(resp => resp.json())
            .then(data => dispatch(setProducts(data)))

    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log('Products: ', products);
    return (
        <div className="ui grid container">
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;