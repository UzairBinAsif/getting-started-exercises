type Car = {
    manufacturer: string,
    model: string,
    [key: string]: any,
}
function carsInfo(manu: string, model: string, ...info: [string, any][]):Car{
    let carObject: Car = {
        manufacturer: manu,
        model: model,
    }
    for(let [key,value] of info){
        carObject[key] = value;
    }
    return carObject
}
let dreamCar = carsInfo("Kia", "Sportage", ["color","Green"], ["Hybrid", true])
console.log(dreamCar);