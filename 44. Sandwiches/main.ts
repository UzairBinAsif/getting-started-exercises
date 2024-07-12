let items1 = ['mayo', 'garlic', 'lettuce', 'chicken']
let items2 = ['mayo', 'ketchup', 'Tikka']
let items3 = ['BBQ Sauce', 'Beef', 'lettuce', 'Spices']
function sandwich(arr: string[]){
    console.log("\nThe sandwich being ordered includes the following ingredients:");
    for(let item in arr){
        console.log(arr[item]);
    }
}
sandwich(items1)
sandwich(items2)
sandwich(items3)