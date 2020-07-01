const obj = {
    name: 'Azizul Islam',
    roll: 39,
    age: 18,
    village: 'Bagmara'
};
console.log(obj);

delete obj.village;

console.log(obj)

obj.print = function() {
    return this.name;
}

console.log(obj);

delete obj.print;

console.log(obj);