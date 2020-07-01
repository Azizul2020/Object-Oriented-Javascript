//   Without property;

class Person {
    print() {
        return 'This is the new feature of ES6 for declaring pattern for object';
    }
}
let p1 = new Person;
console.log(p1.print());

// Wihout Parameter and with property;

class Player {
    constructor() {
        this.name = 'something';
        this.age = 22;
    }
}
let pl1 = new Player;
console.log(pl1.name);

// With Parameter


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        return `Name is ${this.name} and age is ${this.age}`;
    }
    another() {
        return `This is another function which is created by ${this.name}`;
    }
};
let s1 = new Student('Azizul Islam', 18);
console.log(s1);
console.log(s1.name);
console.log(s1.age);
console.log(s1.print());
console.log(s1.another());


/*
     these methods which is outer constructor function all are include in prototype like ES5;
*/


//Static Method;

class Ud {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        return `My name is ${name} and my age is ${a}`;
    }
    static add(a, b) {
        return a + b;
    }
}

console.log(Ud.add(10, 20)); // Static means the property or method of class name and its not a part of object;