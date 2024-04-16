// Q.15 Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the 
// new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


// 1st step
let Guestlist =["abdul hadi", "abdul qadir","abdul samad", "abdul rasheed", "usama"];
let dontCome = Guestlist[0];
console.log(dontCome, "cant come");

//2nd step
Guestlist.splice(0,1,"jawed"); 
// when you change 0 perameter you should replace value is 1 otherwise 1,1- 2,2-4,4same value

//3rd step
Guestlist.forEach(Guest => console.log(`hello ${Guest},would you like to dinner with me?`));




