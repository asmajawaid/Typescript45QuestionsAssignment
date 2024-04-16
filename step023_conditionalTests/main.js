// Q.23 Conditional Tests: Write a series of conditional tests. Print a statement describing 
// each test and your prediction for the results of each test. Your code should look something 
// like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//creating variable
let car = "subaru";
// Test NO # 1
console.log("is car === 'subaru'? I predict true.");
console.log(car === 'subaru');
// Test NO # 2
console.log("is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
// Test NO # 3
console.log("is car != 'Honda'? I predict true.");
console.log(car != 'Honda');
// Test NO # 4
console.log("is car !== 'Ford'? I predict true.");
console.log(car !== 'Ford');
// Test NO # 5
console.log("is car.upper case == 'SUBARU'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU');
// Test NO # 6
console.log("is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');
// Test NO # 7
console.log("is car ==='SUBARU'? I predict False.");
console.log(car === 'SUBARU');
// Test NO # 8
console.log("is car == 'train'? I predict False.");
console.log(car == 'train');
// Test NO # 9
console.log("is car == 'vits'? I predict False.");
console.log(car == 'vits');
// Test NO # 10
console.log("is cars != 'subaru'? I predict False.");
console.log(car != 'subaru');
export {};
