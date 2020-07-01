// Object.values take all the values of object property and assign in an array;

const obj = {
    name: 'Azizul Islam',
    age: 18,
    roll: 39,
    village: 'Bagmara',
    print() {
        return this.name;
    }
}
console.log(Object.values(obj));
// again;

let some = Object.values(obj);
console.log(some);