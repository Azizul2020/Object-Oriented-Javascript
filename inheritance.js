function Name(name) {
    this.name = name;
    return this;
}
Name.prototype.print = function() {
    return this.name + ' ' + this.age;
}

function Person(name, age) {
    Name.call(this, name);
    this.age = age;
}
Person.prototype = Object.create(Name.prototype);

var p1 = new Person('Azizul Islam', 18);

console.log(p1);

console.log(p1.print());

console.log(p1.constructor);

Person.prototype.constructor = Person;

console.log(p1.constructor);