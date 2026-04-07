async function getData() {
    setTimeout(function() {
        console.log("Inside Timeout");
    }, 3000)
};

let op = getData();

async function getchData() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await resp.json() // this is also asyncronous parse json
    console.log(data);
}
getchData()
