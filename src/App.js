import './App.css';
import {Routes, Route} from "react-router-dom"

// local
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Favorite from "./pages/Favorite/Favorite";
import Basket from "./pages/Basket/Basket";
import ProductDetail from "./pages/ProductsDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
            <Route path="/basket" element={<Basket/>}/>
        </Routes>
    );
}

export default App;
