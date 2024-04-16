// Q.24 More Conditional Tests: You don’t have to limit the number of tests you create
//  to 10. If you want to try more comparisons, write more tests. Have at least one True
//   and one False result for each of the following:
// • Test#1 for equality and inequality with strings
console.log("Equality test with string: ", 'apple' == 'apple'); //true
// • Test#2 for equality and inequality with strings
console.log("Inequality test with string: ", 'apple' != 'orange'); //true
// • Tests using the lower case function
console.log("Lower case Function test: ", "HELLOW".toLowerCase() == "hellow"); //true
// • Numerical tests involving equality and inequality,
console.log("Equality test with number:", 26 === 26); //true (equality)
console.log("inequality test with number:", 26 != 36); // true (inequality)
// greater than and less than,
console.log("greater than Test: ", 10 > 5); //true (greater than)
console.log("less than Test: ", 5 < 15); //true (less than)
// greater than or equal to,
console.log("greater than or equal to Test: ", 10 >= 10); //true 
// and less than or equal to
console.log("less than or equal to Test: ", 5 <= 10); //true
// • Tests using "and" and "or" operators
console.log("And operator Test: ", 5 === 5 && 10 > 5); //true
console.log("Or operator Test: ", 5 === 5 || 10 < 5); //true
// • Test whether an item is in a array
const fruits = ["apple", "banana", "mango", "orange", "peach"]; //true
console.log("test 'banana' in the array:", fruits.includes('banana')); //true
// • Test whether an item is not in a array
console.log("testing 'Guava' is not in the array:", !fruits.includes('Guava')); // true beacuse of ! NOT sign
export {};
