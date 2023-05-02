import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseCurrency} from "../../redux/ActionsCreators/ActionCreators";

const Header = () => {
    const {basket} = useSelector(s => s.basket)
    const {defaultCurrency} = useSelector(s => s.main.defaultCurrency)
    const dispatch = useDispatch()

    const optionItems = {
        $: "USA",
        RUB: "RUB",
        SOM: "KGS",
        TENGE: "KZT"
    }
    return (
        <header className="bg-gray-500">
            <div className="container mx-auto ">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-2xl ml-10">Logo</h1>
                    <div className="header-menu flex items-center">
                        <NavLink to="/" className=" text-2xl text-white mr-10">
                            Home
                        </NavLink>
                        <NavLink to="/products" className="text-2xl text-white mr-10">
                            Products
                        </NavLink>
                        <NavLink to="/favorite" className="text-2xl text-white mr-10">
                            Favorite
                        </NavLink>
                        <NavLink to="/basket" className="text-2xl   text-white relative mr-10">
                            {
                                basket.length ? <div className="rounded-[50%] bg-amber-500 w-6 flex justify-center items-center right-[-20px] top-[-10px] h-6 absolute">
                                    {basket.length}
                                </div> : ""
                            }
                            Basket
                        </NavLink>
                        <select onChange={(event) => dispatch(chooseCurrency(event))} id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[25%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                Object.keys(optionItems).map(el => (
                                    <option value={el} selected={defaultCurrency === el}>{optionItems[el]}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;