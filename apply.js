function name() {
    console.log(`Hello ${this.name}`)
};
var obj = {
    name: 'Azizul Islam'
};
name.apply(obj);


function add(a, b) {
    return (a + b) * this.c;
}

var obj2 = {
    c: 20
};
console.log(add.apply(obj2, [5, 3]));