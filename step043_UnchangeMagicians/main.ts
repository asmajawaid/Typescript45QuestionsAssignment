//Q.43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each
// array to show that you have one array of the original names and one array with the Great
// added to each magician’s name.

//define the function to show magicians names
function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//function to make magicians great through .map() it will modify Array
function make_great(magician: string[]) {
  return magician.map((name) => `The Great ${name}`);
}

//define an Array of magicians names
let magicians_names = ["herry potter", "alizbath", "diana"];

//making a copy of original Array through .slice() function
let copy_magician_names = magicians_names.slice();

//moodify the copied Array to include "the Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// show both Arrays original and copied

//original
console.log("\n original Array\n");
show_magicians(magicians_names);

//copied
console.log("\n copied Array\n");
show_magicians(copy_great_magicians);
