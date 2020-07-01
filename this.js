var obj = {
    name: 'Azizul Islam',
    print: function() {
        //console.log("Name is " + this.name)
        return ("Name is " + this.name)
    }
};

function some() {
    console.log(this)
        // Here this means window object;
}
some();
var m = obj.print;
// console.log(obj.print());
console.log(m());

/*
 console.log(m())=undefined ;because
 
 m=obj.print();
 m=function print(){ return this.name} ; So here this means window object which name is not defined. As a result total return is undefined
*/

var obj = {
    name: 'Azizul Islam',
    print: function() {
        setTimeout(function() {
            console.log(this.name);
            // undefined because setTimeout return another callback function where this means window object
        })
    }
}
obj.print();


//So just only method's this means object and function's this means window object;




//Using Arrow function

var obj = {
    name: 'Azizul Islam',
    print: function() {
        setTimeout(() => {
            console.log(this.name)
        })
    }
}
obj.print();