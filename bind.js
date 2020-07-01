function name() {
    console.log(`Hello ${this.name}`);
}

var obj = {
    name: 'Azizul Islam',
    age: 18
};
var f = name.bind(obj);
f();

function add(a, b) {
    return (a + b) * this.c;
}
var obj2 = {
    c: 10
}
var add = add.bind(obj2);
console.log(add(2, 5));