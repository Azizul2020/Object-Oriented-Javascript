// Object Creation rule ;
var obj = {};
var obj2 = new Object;
console.log(obj);
console.log(obj2);

//Property ( variable/key ) add;

var obj = {
    name: 'Azizul Islam',
    age: 18,
    roll: function() {
        return 39;
    }
};
console.log(obj);

// key add from Outside;
obj.class = 11;

console.log(obj);

// Particular key access;

console.log(obj.class);
//or
console.log(obj['class']);

// Second Rule of object;

var obj2 = new Object;
obj2.name = "Aminur Morol";
obj2.roll = 17;

console.log(obj2);

// Loop for Object;

for (i in obj) {
    //here i means all key of obj
    console.log(i);
}













//