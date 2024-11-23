/*
Var
There are a few general rules for naming variables:
Variable names cannot start with numbers.
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
Variable names cannot be the same as keywords. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
*/
var favoriteFood='pizza'
var numOfSlices=8
console.log(favoriteFood);
console.log(numOfSlices);

/*
Let
Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined.
*/
let changeMe = true;
changeMe = false;
console.log(changeMe);

/*
Const
A const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.
*/
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'



let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


// ++ and -- only move in steps of 1
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;


var favoriteAnimal = 'snake'
console.log('My favorite animal: ' + favoriteAnimal)

// Template Literals are more useful than regular old concatenation for making nice strings
var myName = 'Name'
var myCity = 'City'
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)


let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1
console.log(typeof newVariable);