// function preparefood(callback) {
//     console.log("Preparing food!")
// }

// function hotel() {
//     setTimeout(preparefood, 2000)
// }

// getNextId = () => { getData(2); }

// const fn = () => {
//    console.log("Hello");
// }
// fn()


// function getData(dataId, getNextId) {
//     setTimeout(()=> {
//         console.log("data", dataId)
//         if (getNextId){
//             getNextId();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     });
// });


// setTimeout(() => {
//     console.log("prepare food");
//     setTimeout(() => {
//         console.log("Cook Food");
//         setTimeout(() => {
//             console.log("Pack Order")
//             console.log("Order Completed")
//         }, 1000)
//     }, 3000)
// }, 2000)



// let promise = new Promise((resolve, reject) => {
//     console.log("Promise!!")
//     resolve("success")
// })

// [[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"

// [[Prototype]] : Promise
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : "success"



// function getData(dataId, getNextId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//         console.log("data", dataId)
//         resolve("Success")
//         if (getNextId){
//             getNextId();
//         }
//     }, 2000);
//     })
    
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     });
// });


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Promise")
//         // resolve("Success")
//         reject("Error")
//     })
// }

// let promise = getPromise()


// promise.catch((err) => {
//     console.log("rejected", err) //err will me message which u passed during err
// })


// 1. USING CALLBACK 

setTimeout(() => {
    console.log("prepare food");
    setTimeout(() => {
        console.log("Cook Food");
        setTimeout(() => {
            console.log("Pack Order")
            console.log("Order Completed")
        }, 1000)
    }, 3000)
}, 2000)


// 2. USING PROMISE 
function prepare_food() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Prepare Food")
            resolve(200)
        }, 2000)
    })
}

function cook_food() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cook Food")
            resolve(200)
        }, 3000)
    })
}

function pack_order() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pack Food")
            resolve(200)
        }, 1000)
    })
}


prepare_food()
    .then((res) => {
        console.log(res)
        return cook_food()
    })
    .then((res) => {
        console.log(res)
        return pack_order()
    })
    .then((res) => {
        console.log(res)
    })
    .finally(() => {
        console.log("Order Completed ")
    })



// 3 Async-Await

function prepare_food() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Prepare Food")
            resolve()
        },2000)
    })
}

function cook_food() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cook Food")
            resolve()
        }, 3000)
    })
}

function pack_order() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pack Food")
            resolve()
        }, 1000)
    })
}

async function get_food() {
    try{
        await prepare_food();
        await cook_food();
        await pack_order();
    } catch (error){
        console.log(error)
    }finally {
        console.log("Order Completed")
    }
    
}
get_food()

