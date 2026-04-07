
async function prepare_food() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Prepare Food")
            resolve()
        },2000)
    })
}

async function cook_food() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cook Food")
            resolve()
        }, 3000)
    })
}

async function pack_order() {
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

