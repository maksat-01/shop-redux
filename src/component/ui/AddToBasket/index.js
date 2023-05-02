import React from 'react';
import {BsFillBasketFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../redux/ActionsCreators/BasketActions";

const AddToBasket = ({product}) => {
    const dispatch = useDispatch()
    return (
        <button
            onClick={() => dispatch(addToBasket(product))}
            className="text-white flex  justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            добавить в
            <BsFillBasketFill className="mx-4 text-xl"/>
        </button>
    );
};

export default AddToBasket;