const obj = {
    fname: 'Azizul',
    lname: 'Islam',
    get fullname() {
        return `${this.fname} ${this.lname}`;
    },
    set fullname(a) {
        let b = a.split(' ');
        this.fname = b[0];
        this.lname = b[1];
    }
}
console.log(obj.fullname);
obj.fullname = 'Sobuj sheikh';
console.log(obj.fullname);