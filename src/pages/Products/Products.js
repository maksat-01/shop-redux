import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../../component/ProductCard";
import {useEffect} from "react";
import {getProducts} from "../../redux/ActionsCreators/ActionCreators";

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    const {products} = useSelector((state) => state.main)
    console.log(products)
    return (
        <div className="container mx-auto">
            <h1 className="text-[30px] text-center">Products</h1>
            <div className=" flex flex-wrap">
                {
                    products.map((product) => <ProductCard product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
};

export default Products;