
import {useContext, useState, useEffect} from "react";
import {CartContext} from "../Context/CartContext";

const ShopCart = () => {
    
    const {cart, addToCart, removeItem, clear} = useContext(CartContext); //importamos funciones del cartcontext
    const [total, setTotal] = useState(0); //definimos el valor inicial del total del carrito

    return (
    <>
        <div className="carrito">

        </div>  
    </>
    )
}   

export default ShopCart;