import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext({
    cart: [], //Lista del carrito de pedidos
    addItemToCart: () => { }, //Agregar al carrito
    isInCart: () => { }, //Verificacion de si esta o no el producto | true/false 
});


export default function CartProvider({ children }) {
    const [cart, updateCart] = useState([]);
    
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id); //prod hace referencia a cada item.
    }

    const removeItem = (item) => {
        const nuevoCarrito = cart.filter((prod) => prod.id !== item.id);
        updateCart(nuevoCarrito);
    }

    const clear = () => {
        updateCart([]);
    }

    //FUNCION CALCULADORA DE ITEMS
    const totalQuantityItems = () => {
        return cart.reduce((acumulador, prod) => acumulador + prod.quantity, 0);
    }

    //FUNCION QUE CALCULA EL PRECIO FINAL
    const totalPrice = () => {
        return cart.reduce((acumulador, prod) => acumulador + prod.price * prod.quantity, 0);
    }

    const addItemToCart = (id, quantity, price,image) => {
        if(isInCart(id) == true){
            const newCart = cart.map(i=>{
                if(i.id === id){
                    return {...i,quantity: i.quantity + quantity}
                }
                return i;
            })
            updateCart(newCart)
        }
    };

    const aumentarItem = (id) => {
        updateCart(
            cart.map((prod, i) => {
                if(prod.id === id) return {...prod, quantity:cart[i].quantity + 1};
                return prod;
            })
        );
    };

    const decrementarItem = (id) => {
        updateCart(
            cart.map((prod, i) => {
                if(prod.id === id) return {...prod, quantity:cart[i].quantity - 1};
                return prod;
            })
        );
    };
    
    const values = {
        cart,
        addItemToCart,
        aumentarItem,
        decrementarItem,
        isInCart,
        removeItem,
        clear,
        totalPrice,
        totalQuantityItems
    }

    return <CartContext.Provider value={values}> {children} </CartContext.Provider>


} 