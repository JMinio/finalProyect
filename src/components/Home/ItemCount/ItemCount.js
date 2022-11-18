import React from 'react';
import { useState, useContext } from 'react';
import "../ItemDetailContainer/item-style.css"; 
import { CartContext } from '../../../Context/CartContext';

function ItemCount({ stock}) {

    const [value, setValue] = useState(1);

    function onAdd() {
        (stock) > value ? setValue(value + 1) : setValue(value + 0);
    }

    function onSubstract() {
        value !== 0 ? setValue(value - 1) : setValue(value + 0);
    } 



    return (
        <>        
            <button className="button-cart" onClick={()=>onAdd()}>-</button>
            <b>{value}</b>
            <button className="button-cart" onClick={()=>onSubstract()}>+</button>
        </>
    )

}

export default ItemCount;