function myNew(consFun) {
    var obj = {};
    Object.setPrototypeOf(obj, consFun.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    consFun.apply(obj, argsArray.slice(1));
    return obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
};


var cat2 = myNew(Person, 'Azizul Islam', 18);
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