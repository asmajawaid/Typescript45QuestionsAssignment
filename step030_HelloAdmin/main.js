//Q.30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in
//  to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you
//  like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//creating a Array
let usernames = ["mahad", "ali", "zain", "Admin", "uroosa"];
//using forEach loop on Array
usernames.forEach(oneuser => {
    if (oneuser === "Admin") {
        console.log(`Hello ${oneuser}, would you like to see a status report? `);
    }
    else {
        console.log(`Hello ${oneuser}, thank you for logging in again.`);
    }
});
export {};
