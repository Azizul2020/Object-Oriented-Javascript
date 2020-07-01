class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        return `Name is ${this.name}, Age is ${this.age}`;
    }
}
class Player extends Person {
    constructor(name, age, id, game) {
        super(name, age);
        this.id = id;
        this.game = game;
    }
    print() {

        return `${super.print()}, id is ${this.id} and favourite game is ${this.game}`;
    }
}

let p1 = new Player('Azizul Islam', 18, 111, 'Football');
console.log(p1.print());