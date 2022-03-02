//this is the string that I want to reverse
myString = 'hello';


//reverse a string by using array reversion
function revString(x){
        
    let arrayOfLetters = x.split('');
    // console.log(arrayOfLetters);
    
    let reversedArray = arrayOfLetters.reverse();
    // console.log(reversedArray);
    
    let joinedArray = reversedArray.join('');
    return joinedArray
}
//using this function
revString(myString);

//reverse a string by using for loop
function revStringFromLoop(x){
    let reversedString = '';
    for(let i = x.length-1; i>= 0; i--){
        reversedString += x[i];        
    }
    return reversedString;
}
//using this functino
revStringFromLoop(myString);
