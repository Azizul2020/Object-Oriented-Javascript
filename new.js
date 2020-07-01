function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
};


var cat2 = myNew(Animal, 'cat', 18);
console.log(cat2);



function newnew(constructor) {
    var obj = {};
    obj.prototype = Object.create(constructor.prototype);
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    constructor.apply(obj, args.slice(1));
    return obj;
};

function Apply(name, age) {
    this.name = name;
    this.age = age;
};
var a1 = newnew(Apply, 'Azizul Islam', 39);
console.log(a1);