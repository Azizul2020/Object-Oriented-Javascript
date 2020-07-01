const obj = {
    name: 'Azizul Islam',
    age: 18
}
let { age, name } = obj; // order maintaining is not mandatory;

console.log(`My name is ${name} and my age is ${age}`);


function biodata({ name, age }) { // order maintaining is not mandatory;
    console.log(`My name is ${name} and my age is ${age}`);
};
biodata({ age, name }) // order maintaining is not mandatory;