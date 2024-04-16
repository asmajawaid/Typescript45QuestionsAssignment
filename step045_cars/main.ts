//Q.45 Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept 
// an arbitrary number of keyword arguments. Call the function with the required information 
// and two other name-value pairs, such as a color or an optional feature. Print the Object 
// that’s returned to make sure all the information was stored correctly.

//define a function to create a car object with opitionals
function create_car(manufacturer : string, model : string, ...options: { [ key : string ]: any } []): object{
    //initialize a car object with manufeacturer and model
    let carInfo ={
        manufacturer,
        model,
        ...Object.assign({}, ...options)
    };
    return carInfo;

}
//call the function to create a car object
let my_car = create_car("toyota","corrolla",{color: "black"},{features:['sunroof','navigations','power window and stairing']});  //this is two argument manufacturer and model

//print the variable
console.log(my_car);
































