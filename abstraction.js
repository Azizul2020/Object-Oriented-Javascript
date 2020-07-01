function Math() {
    this.a = 2;
    this.b = 5;
    let obj = {
        x: 10,
        y: 20
    }
    let print = function(c) {
        console.log(c);
    };
    this.draw = function() {
        print(1);
        return ('draw function');

    }
}
const m1 = new Math();
console.log(m1.draw());

console.log(m1.print()); // It is not a function because print() just a part of Math function , it is not a part of m1 obj