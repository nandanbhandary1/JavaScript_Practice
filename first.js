const content = require("fs")


function print(err, data) {
    console.log(data)
}

content.readFile("a.txt", "utf-8", print)

console.log("Done!")


for (let i=0; i<=10; i++) {
    setTimeout(() => console.log(i), 0)
}
console.log("---------------")
let j = 0
for (j=0; j<=10; j++) {
    setTimeout(() => console.log(j), 0)
}


class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.height * this.height;
        return area
    }
}

const rect = new Rectangle(2,4,"Blue")
const area = rect.area()
console.log(area)

console.log(rect.area)


const name =  (val) => console.log(val);
name("nandan")

