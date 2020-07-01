const obj = {
    name: 'Azizul Islam',
    age: 18
}
const obj2 = {
    roll: 39
};
Object.assign(obj, obj2);
console.log(obj); // All the properties of obj2 is available in obj;

console.log(obj2); //here just obj2 is available;

// again
let full = Object.assign(obj, obj2);
console.log(full);


// If same property or method have all object, Last object overwrite the first;

const obj3 = {
    name: 'Azizul Islam',
    age: 18
}
const obj4 = {
    age: 17,
    roll: 39
}
let full1 = Object.assign(obj3, obj4);

console.log(full1); // here last object is obj4 so roll property overwrite the first age property.


// create new object using object.assign
const person = {
    name: 'Azizul Islam',
    age: 18
};
let pObj = Object.assign({}, person);
console.log(pObj);

// add new properties

const student = {
    name: 'Azizul Islam',
    age: 18
}
let sObj = Object.assign({}, {
    roll: 39,
    village: 'Bagmara'
})
console.log(sObj);