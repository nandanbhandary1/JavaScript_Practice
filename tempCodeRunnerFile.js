function sum(a,b) {
    console.log(a+b)
}

function calculator(a,b,callback) {
    sum(a,b,callback)
}
calculator(1,2,sum)