// Q.31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.



let usernames =["mahad","ali","zain","Admin","uroosa"];
usernames =[]; // 2nd condition remove all usernames

if( usernames.length === 0){               
    console.log("your Array is Empty. We need to find some users!"); // message for empty Array
}else{
    usernames.forEach(oneuser => {
        if(oneuser === "Admin"){
            console.log(`Hello ${oneuser}, would you like to see a status report? `);
        }else{
            console.log(`Hello ${oneuser}, thank you for logging in again.`);
        }
    });
};













