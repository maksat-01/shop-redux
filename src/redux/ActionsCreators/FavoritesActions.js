/** FAVORITES ACTIONS **/
import {ADD_TO_FAVORITES} from "../../pages/Basket/ActionTypes";

export const addToFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const found = favorites.find(el => el.id === product.id)
    if (found) {
        favorites = favorites.filter(el => el.id !== product.id)
    } else {
        favorites = [...favorites, {...product, isLiked: true}]
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    return {type: ADD_TO_FAVORITES, payload: product}
}