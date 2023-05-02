import React from 'react';
import {BsFillBasketFill} from "react-icons/bs"
import { useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import AddToBasket from "./ui/AddToBasket";
import AddToFavorite from "./ui/AddToFavorite";

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {  defaultCurrency,allCurrencies} = useSelector(s => s.main)
    const {basket} = useSelector(s => s.basket)
    const foundProduct = basket.some(el => el.id === product.id)
    const price = product.price * allCurrencies[defaultCurrency]
    return (
        <div className="w-[25%] mx-8 my-8 rounded-[10px]">
            <div>
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt="img" className="w-[200px] h-[200px]"/>
                </Link>
            </div>
            <h2>{product.title}</h2>
            <h3 className="font-mono text-start">{price} {defaultCurrency}</h3>
            <div className="flex justify-between items-center">
                <AddToFavorite product={product}/>
                {
                    foundProduct ?
                        <button onClick={() => navigate('/basket')} type="button"
                                className="text-gray-900 flex items-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            перейти в
                            <BsFillBasketFill className="mx-4 text-xl"/>
                        </button>
                        :
                        <AddToBasket product={product}/>
                }
            </div>
        </div>
    );
};

export default ProductCard;