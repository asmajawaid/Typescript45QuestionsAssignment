// Q.3 Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase

//storing a person name in a veriable

let personName : string = "Asma jawaid"

// printing a person name in lowercase

console.log("Lowercase:", personName.toLowerCase() )

// printing a person name in Uppercase

console.log("uppercase:", personName.toUpperCase() )

// printing a person name in titlecase 

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());



