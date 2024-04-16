// Checking Usernames: Do the following to create a program that simulates how websites ensure
//  that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["Mahad", "ali", "Zain", "Tayyaba", "Uroosa"];
// • Make another list of five usernames called new_users. Make sure one or two of the
//  new usernames are also in the current_users list.
let new_users = ["Asma", "Kiran", "Misbah", "Tayyaba", "Uroosa"];
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
//making a condition for user names already exits and save in our_condition variable
new_users.forEach((new_one_user) => {
    let ourCondition = current_users.some((current_one_user) => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase());
    // print different messages using if-else statement
    if (ourCondition) {
        console.log(`sorry! ${new_one_user} is already taken.`);
    }
    else {
        console.log(`this user name ${new_one_user} is available.`);
    }
});
export {};
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN'
//  should not be accepted.
