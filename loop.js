const obj = {
    name: 'Azizul Islam',
    age: 18,
    roll: 39,
    village: 'Bagmara',
    print() {
        return this.name;
    }
}

// for in loop

for (let key in obj) {
    console.log(key);

    console.log(obj[key]);

    console.log(`${key} : ${obj[key]}`);
}


// for loop in OOJS there are also two methods one is Object.keys for all the keys and Object.values for all the values.  But this is the part of ES6