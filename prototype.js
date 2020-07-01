function Person(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.print = function() {
    return this.name + ' ' + this.age;
}
console.log(Person.prototype);

var p1 = new Person('Azizul Islam', 18);
var p2 = new Person('Sobuj Sheikh', 19);
console.log(p1);
console.log(p1.print());


console.log(p2);
console.log(p2.print());
console.log(p1.prototype);
console.log(p2.prototype);
/*
p1.prototype and p2.prototype are undefined because prototype is for constructor it is added for share the same activity of any object that is declared by constructor;
*/

var b = p1.__proto__ === p2.__proto__;
console.log(b);


var c = p1.__proto__.print() === p2.__proto__.print();
console.log(c);


var d = p1.print === p2.print;

console.log(d);


p1.__proto__.print = function() {
    return ('This is for changing all activity of print function');

}
console.log(p1.print());
console.log(p2.print());