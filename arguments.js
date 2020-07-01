function a() {
    console.log(arguments);
    console.log('Type of arguments is ' + typeof(arguments));

}
a('Azizul Islam', 39, 18, 11);

function b() {
    console.log('Arguments.length is ' + arguments.length);
}
b(10, 20, 50, 5, 5551, 515, 45);


function add() {
    console.log(arguments[0] + arguments[1]);
};
add(10, 20)




// arguments object to Array;

function c() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args.slice(5));
}
c(1, 2, 3, 4, 5, 6);



function addAll() {
    var arg = Array.prototype.slice.call(arguments)
    return arg.reduce(function(a, b) {
        return a + b;
    })
};
console.log(addAll(10, 20, 50, 60, 40, 40, 40, 50, 60, 50, 50, 50, 650, 4));