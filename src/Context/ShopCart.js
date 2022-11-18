
import {useContext, useState, useEffect} from "react";
import {CartContext} from "../Context/CartContext";

import {Row} from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap/Col';

const ShopCart = () => {
    
    const {cart, addToCart, removeItem, clear} = useContext(CartContext); //importamos funciones del cartcontext
    const [total, setTotal] = useState(0); //definimos el valor inicial del total del carrito

    /* const sendOrder = () => {
        const order = {
            buyer: {name: "Julian", email: "juli.mno18@gmail.com"};
            item: cart,
            total: total
        }
    } */
    
    return (
    <>
        <div className="carrito">
            
        </div>  
    </>
    )
}   

export default ShopCart;