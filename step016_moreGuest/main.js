//Q.16 More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the 
// end of your list. • Print a new set of invitation messages, one for each person in your list.
//creating aguest list Array
let Guestlist = ["abdul hadi", "abdul qadir", "abdul samad", "abdul rasheed", "usama", "zain"];
// making a variable for those who cant come
let dontCome = Guestlist[0];
//printing the name of guest who cant come
console.log(dontCome, "cant come");
//add or remove values from guest list Array
Guestlist.splice(0, 1, "jawed");
//printing message for beggier table
console.log("Good News! We just found a bigger dinner table for dinner.");
//adding anew value at starting index of array
Guestlist.unshift("Arshad");
// adding a new value at ending index of Array
Guestlist.push("Asma");
//Get a middle index of our guest list Array
let middleIndex = (Guestlist.length / 2);
// adding a new guest at middle index of Array
Guestlist.splice(middleIndex, 0, "Hani");
// print message of updated list
console.log("updated list of our guests");
//sending a invitation message to our guest one by one with there names
Guestlist.forEach(oneguest => console.log(`Hello! ${oneguest}, would you like to dinner with me?`));
export {};
