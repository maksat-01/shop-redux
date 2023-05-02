import React from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, deleteFromBasket, increaseQuantity} from "../../redux/ActionsCreators/BasketActions";

const BasketTable = ({product}) => {
    const {defaultCurrency,allCurrencies} = useSelector(s => s.main)
    const dispatch = useDispatch()
    const price = product.price * product.quantity * allCurrencies[defaultCurrency]
    return (
        <tr className="bg-gray-900 border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-black">
                {product.title}
            </th>
            <td className="px-6 py-4">
                <img src={product.image} width={40} alt=""/>
            </td>
            <td className="px-6 py-4 flex items-center pt-8">
                <span onClick={() => dispatch(decreaseQuantity(product))} className={`mx-2 text-xl cursor-pointer ${product.quantity === 1 ? "text-gray-500" : "text-blue-600"}`}><AiOutlineMinus/></span>
                {product.quantity}
                <span onClick={() => dispatch(increaseQuantity(product.id))} className="mx-2 text-xl cursor-pointer text-blue-600"><AiOutlinePlus/></span>
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 cursor-pointer py-4">
                <RiDeleteBin6Line onClick={() => dispatch(deleteFromBasket(product.id))} className="text-2xl"/>
            </td>
        </tr>
    );
};

export default BasketTable;