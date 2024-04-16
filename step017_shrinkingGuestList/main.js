//Q.17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
//  a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make 
// sure you actually have an empty list at the end of your program.
//creating aguest list Array
let Guestlist = ["abdul hadi", "abdul qadir", "abdul samad", "abdul rasheed"];
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
//inform that only two guest invite for dinner
console.log("unfortunitely, the new dinner table wont arrive on time, so i can only invite only two guests to dinner with me");
//using while loop to remove guest from the array untill two names remain
while (Guestlist.length > 2) {
    let removeGuest = Guestlist.pop();
    console.log(`Sorry, ${removeGuest} i cant invite you to dinner.`);
}
// sending the invitation to the last two guests on the list
console.log("invitation to the last two guests");
Guestlist.forEach(lastTwo => console.log(`luckely ${lastTwo} you are still invited to dinner`));
//removing last two guests from the list
Guestlist.pop();
Guestlist.pop();
console.log("dinner is cancelled");
console.log("empty list:", Guestlist);
export {};
