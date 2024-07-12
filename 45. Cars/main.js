"use strict";
function carsInfo(manu, model, ...info) {
    let carObject = {
        manufacturer: manu,
        model: model,
    };
    for (let [key, value] of info) {
        carObject[key] = value;
    }
    return carObject;
}
let dreamCar = carsInfo("Kia", "Sportage", ["color", "Green"], ["Hybrid", true]);
console.log(dreamCar);
