const myPizza = [2, 3, 4, 5, 6, -2, 5];

//map
const addedPizza = myPizza.map(
    function (value){
        return '<p>' + value + '</p>';
    }
)
console.log(addedPizza);

//filter
const Filtered = myPizza.filter(value => value >= 3)

console.log(Filtered);

//reduce

let valueee = myPizza.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;    
}, 0)

console.log(valueee);
