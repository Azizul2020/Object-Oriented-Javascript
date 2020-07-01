function personDetails(name, age, roll) {
    return {
        name, //here name, means name:name;
        age, //here age, means age:age;
        roll, //here roll, means roll:roll
        print() { //here print() means function print();
            return `Person's name is ${name}, his age is ${age} and his class roll is ${roll}`;
        }
    }
};
let obj = personDetails('Azizul Islam', 18, 39);
console.log(obj.print());





let name = 'Sobuj Sheikh';
let roll = 11;
const obj2 = {
    name,
    roll
}

console.log(obj2.name);