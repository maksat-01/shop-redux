import React from 'react';
import {MdOutlineFavorite} from "react-icons/md";
import {BiTrash} from "react-icons/bi"
import {useDispatch, useSelector} from "react-redux";
import {addToFavorites} from "../../../redux/ActionsCreators/FavoritesActions";

const AddToFavorite = ({product}) => {
    const  dispatch = useDispatch()
    const {favorites} = useSelector(state => state.favorites)
    const found = favorites.some(el => el.id === product.id)
    return (
        <button onClick={() => dispatch(addToFavorites(product))}  className="flex items-center justify-center">
            {
                product.isLiked ?   <BiTrash className="text-2xl"/>    :
                    <MdOutlineFavorite className={`text-2xl ${found ? "text-red-600" : ""}`}/>
            }
        </button>
    );
};

export default AddToFavorite;