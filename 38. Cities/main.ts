//Appropriate approach is comparing with an array of cities present in the country.
function describe_city(city: string, country: string = "Pakistan"){
    if(city == "Karachi"){
        console.log(`${city} is in ${country}.`);   
    } else if(city == "Islamabad"){
        console.log(`${city} is in ${country}.`);   
    } else if(city == "Lahore"){
        console.log(`${city} is in ${country}.`);   
    } else {
        console.log(`${city} is not in ${country}.`);   
    }
}

describe_city("Karachi")
describe_city("Lahore")
describe_city("Manchester")