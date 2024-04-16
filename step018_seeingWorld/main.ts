
//Q.18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let countriesToVisit: string[] =["saudia","dubai","paris","amriths","brazil"];

// • Print your array in its original order.
console.log("original order:", countriesToVisit);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:",[...countriesToVisit].sort());

// • Show that your array is still in its original order by printing it.
console.log("still in original order:",countriesToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse order:",[...countriesToVisit].reverse());

// • Show that your array is still in its original order by printing it again.
console.log("still in original order:",countriesToVisit);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("original Array reversed:", countriesToVisit.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to original order:", countriesToVisit.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in Alphabetical order:", countriesToVisit.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("original order reverse again:", countriesToVisit.reverse());