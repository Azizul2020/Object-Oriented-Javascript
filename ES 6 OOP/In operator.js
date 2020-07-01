const obj = {
    name: 'Azizul Islam',
    age: 18,
    roll: 39,
    show() {
        return this.name;
    }
}

// for in loop

for (let key in obj) {
    console.log(key);

    console.log(obj[key]);

    console.log(`${key} : ${obj[key]}`);
}


// Existence / condition ;
if ('name' in obj) {
    console.log(`Name property is available its value is ${obj.name}`);
}