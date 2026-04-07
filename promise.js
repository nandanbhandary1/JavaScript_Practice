function random() {

}

let p = new Promise(random);


function callback () {
    console.log('Promise succeded')
}

console.log(p)
p.then(callback)
