import './ItemListContainer.css'
import { useState } from 'react';
import carsApi from '../../../APIrest/galeryApi';
import Card from '../Item/Item';
import { useParams } from 'react-router-dom';

    function ItemListContainer() {

    const [filter, setFilter] = useState('');
    const { marca } = useParams();

    const getApi = () => {
    return new Promise(
        (resolve,reject)=>{
            setTimeout(
                ()=>{
                    resolve(carsApi);
                },3000
            )
        }
    )
}

async function fetchCars(){
    const carsPromise = await getApi();
}

fetchCars();

    return ( /* ACA TENGO SE CREAN LAS CARDS*/

        <div className="principal-container">

            <h1 className="catalogo"> CATÁLOGO, ELIGE TU PRÓXIMO VEHÍCULO </h1>
            <label className="filtro"> Filtro: </label>
            <input
                placeholder="MARCA"
                id="filter"
                name="filter"
                type="text"
                value={filter}
                onChange={(car) => setFilter(car.target.value)}
            />
 
        <div className="cards-container">
                {marca ? carsApi
                    .filter(c => c.brand.includes(filter))
                    .filter((c) => c.category === marca)
                    .map((car, i) => (
                        <Card
                            id={i}
                            key={i}
                            brand={car.brand}
                            model={car.model}
                            image={car.image}
                            price={car.price}
                            stock={car.stock}
                            color={car.color}
                            category={car.category}
                        />
                    )) 
                    : carsApi
                        .filter(c => c.brand.includes(filter))
                        .map((car, i) => (
                            <Card
                                id={i}
                                key={i}
                                brand={car.brand}
                                model={car.model}
                                image={car.image}
                                price={car.price}
                                stock={car.stock}
                                color={car.color}
                                category={car.category}
                            />
                        ))}

            </div>

        </div>

    )
}

export default ItemListContainer;