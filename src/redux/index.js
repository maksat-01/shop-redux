import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {MainReducer} from "./Reducer/MainReducer";
import {BasketReducer} from "./Reducer/BasketReducer";
import {FavoriteReducer} from "./Reducer/FavoritesReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorites: FavoriteReducer,
}), composeWithDevTools(applyMiddleware(thunk)))