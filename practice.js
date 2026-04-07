// function myname() {
//     let a = 20
//     console.log(a)

// }
// myname()
// console.log(a)

// let b = 70
// b = 56
// console.log(b)

// const aa = ['nandan', 'hello']
// aa[0] = 'hey'
// console.log(aa)

// let text = "Visit w3Schools"
// let n = text.search(/w3schools/i);
// console.log(n)

// let text = "Visit W3schools";
// let n = text.match(/W3schools/);
// console.log(n)

// let text = "Visit Microsoft!";
// let result = text.replace(/Microsoft/i, "W3Schools"); 

// let text = "Visit W3Schools";
// let n = text.search(/W3Schools/);
// console.log(n)

// let text = "Black, white, red, green, blue, yellow.";

// let result = text.match(/red|green|blue/g);
// console.log(result)

// if (true) {
//     console.log("Hello")
// }

// var a = 20
// function shad() {
//     var a = 30
// }
// console.log(a)

// var a = 20
// {
//     a = 30
// }
// console.log(a)

// let c =8 
// {
//     let c = 6
//     console.log(c)
// }
// console.log(c)

// const b = 90

// {
//     const b = 40
//     console.log(b)
// }
// console.log(b)


// Closure
function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    a = 100
    return y
}
var z = x();
console.log(z)
z()

