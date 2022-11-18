
const carsApi = [
    {
        "category":"bmw",   
        "color":"white",
        "brand":"BMW",
        "model":"330",
        "image":"330.jpg",
        "price":20000,
        "stock":4,
        "quantity":1
    },
    {
        "category":"mercedes",   
        "color":"grey",
        "brand":"MERCEDES",
        "model":"A200",
        "image":"a200.jpg",
        "price":10000,
        "stock":8,
        "quantity":1

},
    {
        "category":"mercedes",   
        "color":"white",
        "brand":"MERCEDES",
        "model":"AM4",
        "image":'am4.jpeg',
        "price":15000,
        "stock":7,
        "quantity":1

},
    {
        "category":"chevrolet",   
        "color":"grey",
        "brand":"CHEVROLET",
        "model":"CAMARO",
        "image":'camaro.jpg',
        "price":25000,
        "stock":11,
        "quantity":1

},
    {
        "category":"toyota",   
        "color":"white",
        "brand":"TOYOTA",
        "model":"COROLLA",
        "image":'corolla.jpg',
        "price":5000,
        "stock":21,
        "quantity":1

},
    {
        "category":"volkswagen",   
        "color":"white",
        "brand":"VOLKSWAGEN",
        "model":"GOLF",
        "image":'golf.jpg',
        "price":17500,
        "stock":17,
        "quantity":1

},
    {
        "category":"bmw",   
        "color":"black",
        "brand":"BMW",
        "model":"M4",
        "image":'m4.jpg',
        "price":48000,
        "stock":8,
        "quantity":1

},
    {
        "category":"bmw",   
        "color":"red",
        "brand":"BMW",
        "model":"M5",
        "image":'m5.jpg',
        "price":35000,
        "stock":7,
        "quantity":1

},
    {
        "category":"volkswagen",   
        "color":"white",
        "brand":"VOLKSWAGEN",
        "model":"VENTO",
        "image":'vento.jpg',
        "price":12500,
        "stock":3,
        "quantity":1

},
    {
        "category":"toyota",   
        "color":"blue",
        "brand":"TOYOTA",
        "model":"yaris",
        "image":'yaris.jpg',
        "price":13000,
        "stock":5,
        "quantity":1

}];

/* const getApi = () => {
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
    console.log(carsPromise);
}

fetchCars();
 */
export const getObjectById = (id) => {
    return carsApi[id]; 
}

export default carsApi;