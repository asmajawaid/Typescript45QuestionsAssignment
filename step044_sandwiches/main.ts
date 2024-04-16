//Q.44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call 
// provides, and it should print a summary of the sandwich that is being ordered. Call the 
// function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]){

    console.log("Making a sandwich with the following items:\n");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("Now you Enjoy sandwich :) \n");
}

//call the function3 times with 3  different arguments
makeSandwich("chicken","cheese","mayo","egg","some capsicum");

makeSandwich("bread","butter","chicken spreed");


makeSandwich("bread","butter","chicken","egg","cheese","corn","crushed red chillies","ginger powder","onion","capsicum");






























