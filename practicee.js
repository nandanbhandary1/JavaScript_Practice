// const { emit } = require("node:cluster")

const { error } = require("node:console");
const { resolve } = require("node:dns");

// const { reverse } = require("node:dns");

// for(;;) {
//     console.log("A")
//     break
// }
// a = 1
// while (a <=10) {
//     console.log(a,end=true)
//     a++
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i< 5);


// function nandan() {
//     console.log("Hello")
// }

// nandan()


// arr = [1,2,3,4,5]
// let ans = arr.map((number) => {
//     return number = number + 10
// })
// console.log(ans)
// console.log(arr)


// arr = [1,2,3,4,5]
// let ans = arr.filter((number) => {
//     return number % 2 == 0
// })
// console.log(ans);


// let arr = [1,2,3,4,'cddccw','dww']


// arr = [90,1,2,3,4,5]
// arr.sort()
// console.log(arr);

// let ans = arr.reduce((acc,curr) => {
//     return acc + curr
// },0)

// console.log(ans);

// let arr = [1,2,3,4,5]

// arr.forEach((val, idx) => {
//     console.log(val, idx);
// })

// let arr = [1,2,3,4,5]

// let sum = 0
// arr.forEach((val) => {
//     sum = sum + val
// })
// console.log(sum);


// let arr = [1,2,3,4]

// for(let num in arr) { wrong
//     console.log(num);
// }

// let obj = {
//     namee: "Nandan",
//     age:23
// }

// for(let key in obj) {
//     console.log(key, obj[key]);
// }



// arr = [1,2,3,4,5]
// for(let num of arr){
//     console.log(num);
// }

// console.log(age);
// var age = 25;

// const greet = () => "hiiiii"
// console.log(greet())


// function greetMe(greett, fullName) {
//     console.log(fullName);
//     greett()
// }

// function greet() {
//     console.log("hello");
// }

// greetMe(greet, 'Nandan') 


// {
//     var tes = 12
// }
// console.log(tes)


// class Human {
//     age = 22
//     name = "Nandan"
//     #salary = 50000

//     constructor(newage, newsal) {
//         this.age = newage
//         this.#salary = newsal
//     }

//     greet() {
//         console.log("hello");
//         console.log(this.#salary)
//     }
//     get fetch() {
//         return this.#salary
//     }

//     set modify(val) {
//         this.#salary = val
//     }
// }

// obj = new Human(23, 70000)
// obj.greet()
// console.log(obj.age)


// let obj = {
//     name:"nandan",
//     age:23,
//     sal:50000
// }

// let dest = {...obj}
// obj.sal = 5

// console.log(obj);
// console.log(dest);

// let test = Object.assign({}, obj)
// console.log(test);

// let destt = {}
// for(let key in obj) {
//     // console.log(key);
//     let nkey = key
//     let val = obj[key]
//     destt[nkey] = val
// }
// console.log(destt);

// try {
//     console.log(x)
// } catch(e) {
//     throw new Error("Bhai declare first")
//     console.log("error caught");
// }

// setTimeout(()=> {
//     console.log("Hello after 10 mins");
// }, 10000)


// setTimeout(()=> {
//     console.log("Hello after test mins");
// }, 10000)


// setTimeout(()=> {
//     console.log("Hello after 5 mins");
// }, 10000)


// let firstpromise = new Promise((resolve, reject) => {
//     setTimeout(function greet(){
//         console.log("Hello Nandan");
//     },2000)
//     resolve(200);
// });



let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Fulfilled")
    } else {
        reject("Promise rejected")
    }
})


promise1.then((message) => {
    console.log(message);
    return "second"
}).then((second_message) => {
    console.log(second_message);
    return "Third"
}).then((third_message) => {
    console.log(third_message);
}).catch((error)=> {
    console.log(error);
}).finally((message) => {
    console.log("I run always");
})

// promise1.then((message) => {
//     console.log("The message is", message);
// }).catch((error) => {
//     console.log(error);
// })
