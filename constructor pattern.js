function Person() {
    this.name = 'Azizul Islam';
    this.age = 18
};
var p1 = new Person();
// here this means p1's this;
console.log(p1.name);

function Person_obj(name, age, Class) {
    this.name = name;
    this.age = age;
    this.class = Class
}
var p2 = new Person_obj('Azizul Islam', 18, 11);
var p3 = new Person_obj('Sobuj Sheikh', 19, 12);
console.log(p2);
console.log(p3);

function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.print = function() {
        return (this.name);

    }
};
var b1 = new Book('Functional Javascript', 'Michbel Fogus', 30);

console.log(b1.print());


//use for in loop here;

for (let i in b1) { //here don't use Book because Book just a common function when new keyword is added before Book function (b1) , b1 is an object;
    console.log(i);
}





function Apply(name, age, print) {
    this.name = name;
    this.age = age;
    this.print = print;
}

var o = new Apply('Azizul Islam', 18, function() {
    console.log(this.name);

});
o.print();