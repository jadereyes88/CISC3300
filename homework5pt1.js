//1
let number = 5;
let result = number > 0 ? "Positive" : "Negative";
console.log(result); 

//2
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(person[key]); 
}

//3
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(number) {
    return number * number;
});

console.log(squares); 
