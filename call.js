function name() {
    console.log(`Hello ${this.name}`);
};
var obj = {
    name: 'Azizul Islam'
};
name.call(obj);


function add(a, b) {
    return (a + b) * this.c;
}
var obj2 = {
    c: 10
}
console.log(add.call(obj2, 6, 5))