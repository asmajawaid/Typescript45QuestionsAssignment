// Q.11 Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.

let friendsName = ["ayesha","faiza","shazia","maha","fahmi"];
friendsName.forEach(friendName => console.log(friendName));



// Q.12 Greetings: Start with the array you used in Exercise 11, but instead of just 
// printing each person’s name, print a message to them. The text of each message should
//  be the same, but each message should be personalized with the person’s name.

let friendNames = ["ayesha","faiza","shazia","maha","fahmi"];
friendNames.forEach(friendName => console.log(`Hello ${friendName},How are you?`))
