//ES5
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        setTimeout(function() {
            console.log(this); //here this means global(window ) object; for general function
        }, 1000)
    }
}
var p1 = new Person('Azizul Islam', 18);
p1.print();

// ES6

function Student(name, roll) {
    this.name = name;
    this.roll = roll;
    this.print = function() {
        setTimeout(() => {
            console.log(this); //here this means Student because arrow function
        }, 1000);
    }
}

var s1 = new Student('Azizul Islam', 39)
s1.print();

const Book = (name, price) => {
    this.name = name;
    this.price = price;
    return `Book name is ${name} and it's price is ${price} tk`;
}
console.log(Book('Javascript', 1000));