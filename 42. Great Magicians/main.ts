let magiciansNames = ["David Bombal", "Christine", "Lucifer"];
function show_magicians(arr: string[]){
    for(let x = 0; x <= (arr.length - 1); x++){
        console.log(arr[x])
    }
}
function make_great(arr: string[]){
    for(let x = 0 ; x < arr.length; x++){
        arr[x] = "The Great " + arr[x];
    }
}
make_great(magiciansNames)
show_magicians(magiciansNames)