import React from 'react';
import {useSelector} from "react-redux";
import BasketPage from "./BasketPage";
import {Link} from "react-router-dom";

const Basket = () => {
    const { defaultCurrency, allCurrencies} = useSelector(state => state.main)
    const {basket} = useSelector(s => s.basket)
    const totalPrice = basket.reduce((acc,el) => {
        return (acc + el.price * el.quantity) * allCurrencies[defaultCurrency]
    },0)
    return (
        <div className="container mx-auto mr-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                {
                    basket.length ?  <BasketPage/> :
                        <Link to="/products">
                            <div className="mx-auto my-20 w-[30%] border-2 h-16 flex items-center justify-center ">EMPTY BASKET</div>
                        </Link>
                 }
            </div>
            <div className="w-full text-2xl font-mono">
                Total: {totalPrice } {defaultCurrency}
            </div>
        </div>
    );
};

export default Basket;