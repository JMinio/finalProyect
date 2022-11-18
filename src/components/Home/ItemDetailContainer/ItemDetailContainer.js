import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObjectById } from "../../../APIrest/galeryApi";
import "./item-style.css";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = () => {
  const { cart } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);
  const [car, setCar] = useState({});

  const { idCar } = useParams();

  useEffect(() => {
    setCar(getObjectById(idCar));

  }, []);

  return (
    <>
      <div className="item-box">
        <h1>DETALLE DEL VEHÍCULO</h1>
        <div className="item-desc">
          <img className="item-image" src={`../images/${car.image}`} />
          <ul className="item-items">
            <li className="item-list item-desc__price">Marca: <b>{car.brand}</b></li>
            <li className="item-list item-desc__price">Modelo: <b>{car.model}</b></li>
            <li className="item-list item-desc__price">Precio: <b>${car.price}</b></li>
            <li className="item-list item-desc__stock">Color: <b>{car.color}</b></li>
            <li className="item-list item-desc__stock">Disponibilidad: <b>{car.stock}</b></li>
            <div className="CartBox">
              <ItemCount />
            </div>
            <Link to={'/shopcart'}>
              <button className="addToCart" onClick={() => addItemToCart({})}> Add to Cart </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ItemDetail;