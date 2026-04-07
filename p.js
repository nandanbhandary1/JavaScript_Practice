// var age = 22.8;

// console.log(age)

// console.log('5' *5)


// function add(a, b, cb) {
//     let result = a + b;
//     cb(result)
// }

// add(400, 10, (res) => console.log(res))

// const fn = function hello() {
//     console.log("Hi");
// }

// fn();      // works
// hello();   // ❌ ReferenceError

// (function () {
//     console.log("Runs immediately");
// })();


// (function() {
//     console.log("Hello")
// })()


// const map = new Map();
// map.set('name', 'Nandan')
// console.log(map)

// let p = new Promise();
// console.log(p)


// myDisplayer("Start");

// setTimeout(function() {
//   myDisplayer("Later");
// }, 1000);

// myDisplayer("End");


// function myDisplayer(some) {
//     console.log(some)
// }

// myDisplayer("Start");

// setTimeout(function() {
//   myDisplayer("Later");
// }, 1000);

// myDisplayer("End"); 

// function myname (a,b) { console.log(a*b)}
// myname(7,7)

// const namee = (val) => console.log(val*val)
// namee(8,8)

// let x = myFunction(4, 3);

// function myFunction(a, b) {
//   return a * b;
// }
// console.log(x)

// const sum = add(2, 3); // ⛔ Will generate error

// const add = function (a, b) {return a + b;};

// function myFunction(a, b) {
//   return a * b;
// }

// let x = myFunction(4, 3) * 2;


// function myname(a,b) {
//     // return arguments.length
//     let sum = 0
//     for(let i = 0; i<arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(myname(4,4,4,4,5))

// function multiply(a, b) {
//   return a * b;
// }

// let text = multiply(3,4).toString();
// console.log(text) 
// console.log(typeof(text))


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName; // this.firstName is the same as person.firstName.
//   }
// };

// console.log(person.fullName());

// function myFunction() {
//   return this;
// }

// myFunction();

// globalThis === global;

// const personn = {
//     firstName:"Nandan",
//     sayHello: () => {
//         return personn.firstName // here this does not work
//     }
// }
// console.log(personn.sayHello());


// const person1 = { name: "John" };
// const person2 = { name: "Paul" };
// const person3 = { name: "Ringo" };

// function greet(greeting) {
//   return greeting + " " + this.name;
// }

// console.log(greet.call(person3, "Hello"));  


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;
console.log(firstName)
console.log(lastName)

const inputt = [1,2,3,4,5]

function transform(i) {
    return i * 2
}

const ans = inputt.map(transform);
console.log(ans)

const input = [1,2,3,4,5]

function filterr(n){
    if (n% 2 == 0) {
        return true
    } else {
        return false
    }
}
const ans = input.filter(filterr)
console.log(ans)


const prices = [10,20,30,40];

const anss = prices.reduce(sum)

console.log(anss)

function sum(accumulato, element) {
    return accumulato + element
}

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("heyy");
        setTimeout(() => {
            console.log("Haiiiiiii")
        }, 7000)
    }, 3000)
}, 1000)

let numbers = [1,2,3,4,5]
let ans = Math.max(...numbers)
console.log(ans)

let username = "Nandan"
let an = [...username].join(" ")
console.log(an)

let fruits = [1,2,3]
let l = [...fruits] // shallow copy
console.log(l) 


function sum(a,b) {
    console.log(a+b)
}

function calculator(a,b,callback) {
    sum(a,b,callback)
}
calculator(1,2,sum)




