
let string = 'pizza #tastes #good';

//1. search for # at the beginning of a word
let reg = /^#/;

//2. get the words from the string
Words = string.split(' ');
// console.log(Words);


//3. check for first letter in each word
for (i= 0; i< Words.length; i++){
    // console.log(Words[i]);
    let someArray = reg.exec(Words[i]);
    if (someArray !== null) {
        console.log(someArray);
            // logic for making some div here.
    }
}
