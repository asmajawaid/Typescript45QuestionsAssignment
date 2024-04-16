// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt
//  with the default message, and a shirt of any size with a different message.
//making a function
function make_shirt(size = "large", printMessage = "I LOVE Typescript") {
    console.log(`Stitched a ${size} shirt with the ${printMessage} prints on shirt.`);
}
//calling a function with by default value
make_shirt();
//calling a function now with Medium size and defult message
make_shirt("medium");
//calling a function now with small size and also Different print message
make_shirt("small", "I LOVE Javascript");
export {};
