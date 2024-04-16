"use strict";
// Q.6 Stripping Names: Store a person’s name, and include some whitespace characters at the 
// beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
//  at least once. Print the name once, so the whitespace around the name is displayed.
//   Then print the name after striping the white spaces
Object.defineProperty(exports, "__esModule", { value: true });
// stripping the name with whitespace begning and the end of the name  
let person_Name = "\t asma jawaid \n";
// printing the name with whitespace
console.log("name with whitespace:", person_Name);
//printing the without spaces
console.log(person_Name.trim());
