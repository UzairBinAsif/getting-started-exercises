function make_shirt(size: string = "Large", text: string = "I Love Typescript."){
    console.log(`The size of T-Shirt is ${size.toUpperCase()} & message printed on it is "${text.toUpperCase()}".`);   
}
// both with defaults
make_shirt()
// default message only
make_shirt("Small")
// both size and message are custom
make_shirt("Medium", "Moye Moye")