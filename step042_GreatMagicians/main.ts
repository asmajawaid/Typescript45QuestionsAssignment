//Q.42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
// called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. Call show_magicians() to see that the list has actually 
// been modified.


//define the function to show magicians names
function show_magicians (magicians: string []) {
    magicians.forEach(name => console.log(name));
}

//function to make magicians great through .map() it will modify Array
function make_great (magician : string[]){
    return magician.map(name => `The Great ${name}`)
}

//define an Array of magicians names
let magicians_names =  ["herry potter", "alizbath", "diana"];


//call make_great function to modify magicians names

let Great_magicians = make_great(magicians_names) //ak argument deni he jo ak Array hu

//call show magicians function that show modify list of magicians
show_magicians(Great_magicians); 





