/*
     In Javascript there are two data type 
          1.Value type are also called primitive
          2.Reference type are also called object
*/
/*
     1.value:
          a.Number/int
          b.string
          c.boolean
          d.symbol
          e.undefined
          f.null
     2. Reference:
          a.Object
          b.function
          c.array     
*/
let x = 10;
let y = x;

x = 20

console.log(x);
console.log(y); // because this is value type

x = { val: 10 }
y = x;
x.val = 20;

console.log(x);

console.log(y); // because this is reference type



// Work with function

let num = 10;

function valueType(num) {
    num++
}
valueType(num);
console.log(num);


num = { val: 10 };



function valueType(num) {
    num.val++;
}
console.log(num);
valueType(num); // because here the value is increased by 1;
console.log(num);



















//