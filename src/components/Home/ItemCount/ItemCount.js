import React from 'react';
import { useState, useEffect } from 'react';
import carsApi from '../../../APIrest/galeryApi';
import Card from '../Item/Item';
import "./itemCount.css";


function ItemCount({ stock }) {
    const [quantity, setQuantity] = useState(0);
    
    function onAdd() {
        (stock) > quantity ? setQuantity(quantity + 1) : setQuantity(quantity);
    }

    function onSubstract() {
        quantity !== 0 ? setQuantity(quantity - 1) : setQuantity(quantity);
    }

    return (
        <div className="addToCart">
            <button className="increase" onClick={() => onAdd()}> + </button>
            <p> Hola</p>
            <button className="decrease"onClick={() => onSubstract()}> - </button>
        </div>
    )

}

export default ItemCount;