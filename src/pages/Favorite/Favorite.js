import React from 'react';
import ProductCard from "../../component/ProductCard";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorites} = useSelector((state) => state.favorites)
    return (
        <div className="container mx-auto">
            <h1 className="text-[30px] text-center">Favorites</h1>
            <div className=" flex flex-wrap">
                {
                    favorites.map((product) => <ProductCard product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
};

export default Favorite;