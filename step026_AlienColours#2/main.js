// Q.26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
// and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 
// 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned
//  10 points.
// • Write one version of this program that runs the if block and another that runs 
// the else block.
//1st version of define variable
let alien_color = "green";
if (alien_color === "green") {
    console.log("player just earnd 5 points for shooting the Alien.");
}
else {
    console.log("player just earnd 10 points for shooting the another color of Alien.");
}
// 2nd version of code
if (alien_color === "yellow") {
    console.log("player just earned 15 points. you won!");
}
else {
    console.log("you loss!");
}
export {};
