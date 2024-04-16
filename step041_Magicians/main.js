//Q.41 Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
//define a function to print each megicians name from a Array
function show_magicians(megicians) {
    megicians.forEach(name => console.log(name));
}
//define an Array containing megicians name
let megicians_names = ["herry potter", "alizbath", "diana"];
//call the function with each megicians names
show_magicians(megicians_names);
export {};
