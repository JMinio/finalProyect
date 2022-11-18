import {useState} from "react";
import "./Item.css";
import {Link} from "react-router-dom";

const Card = ({id,brand,model,image,price,cat}) => {

  /* const {cart} = useContext(CartContext);        FUNCIONA
  const {addItemToCart} = useContext(CartContext);
   */
    return(
        <div className="box">
        <h1>{brand}</h1>
        <h2>{cat}</h2>
        <h4 className="model">{model}</h4>
        <img alt={`Marca: ${brand},"Modelo: ${model}`} src={`/images/${image}`}/>
        <h4 className="price">${price}</h4>
        <div className="card-sumar-restar">
          <Link to={`/item/${id}`}>
          <span className="card-detail">
            <b className="detail">DETALLE</b>
          </span> 
          </Link>
        </div>
      </div>
        
    )
}

export default Card;