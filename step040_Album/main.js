// Q.40 Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a 
// Object containing these two pieces of information. Use the function to make three dictionaries
//  representing different albums. Print each return value to show that Objects are storing 
//  the album information correctly. Add an optional parameter to make_album() that allows
//   you to store the number of tracks on an album. If the calling line includes a value for 
//   the number of tracks, add that value to the album’s Object. Make at least one new function 
//   call that includes the number of tracks on an album.
//define the make_album function
function make_album(artist_name, album_tittle, tracks) {
    let album = {
        artist: artist_name,
        tittle: album_tittle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three funtions and creating three variables with different value
// make_album("Artist No 1", "Album tittle 1", )
let album1 = make_album("junaid jamsheed", "akka ka madinah");
let album2 = make_album("Mulana Habib Attari", "Ghose-e-Azam dastageer");
// calling a make_album function with third parameter
let album3 = make_album("Soban Attari", "Mere Ulfat Madinah se", 10);
//printing value of object
console.log(album1);
console.log(album2);
console.log(album3);
export {};
