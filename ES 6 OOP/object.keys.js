// Object.keys take all the keys of object and assign in an array;

const obj = {
    name: 'Azizul Islam',
    age: 18,
    roll: 39,
    village: 'Bagmara',
    print() {
        return this.name;
    }
}
console.log(Object.keys(obj));
// again;

let some = Object.keys(obj);
console.log(some);