import { helper, a, b, c } from './help.js'

let luckyNum;
console.log(luckyNum);
luckyNum = null;
luckyNum = 'twenty-three';
luckyNum = new Object();

const name = 'named';

//When variable is defined it's global
let a = 'global';

//But inside a function it's local
function fun() {
    let a = 'function';

    if (true) {
        let a = 'block';
        //Var can escape the block though - should be avoided if possible
        var b = 'hoisted';
    }
}

function add (a, b) {
    return a + b;
}
const add = function(a, b){
    return a + b;
}
function higherOrder(fun) {
    fun();
    return function() {

    }
}
function giveMeClosure() {
    let a =10;
    return function() {
        a++;
        return a;
    }
}

function wtfIsThis() {
    console.log(this);
}

const list = ['foo', 'bar', 'bar'];
const uniq = new Set(list);
const dict = new Map([
    ['foo', 1],
    ['bar', 2]
])

//Don't go into callback hell
setTimeout(() => {
    console.log('5 seconds in the future');
}, 5000);

setTimeout(() => {
    console.log('5 seconds in the future');
    setTimeout(() => {
        console.log('5 seconds in the future');
        setTimeout(() => {
            console.log('5 seconds in the future');
            setTimeout(() => {
                console.log('5 seconds in the future');
            }, 5000);
        }, 5000);
    }, 5000);
}, 5000);

//Use a Promise instead
const promise = new Promise(
    (resolve, reject) => {
        // Do something async here

        if (greatSuccess) {
            resolve('success');
        } else {
            reject('failure');
        }
    }
)
//Promises can then be used by .then or .catch
promise
    .then(success => {
        console.log('yay!', success);
    })
    .catch(err => {
        console.log('oh no!', err);
    })

//Better to use an async function though
async function asyncFun() {
    try {
        const result = await promise;
    }
    catch (error) {

    }
}