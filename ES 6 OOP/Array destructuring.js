let arr = [10, 20, 30, 40, 50, 60, 70];
[val1, val2] = arr;
console.log(val1);

[val1, val2, val3, val4, val5, val6, val7] = arr;
console.log(val7);

// if i need only 4 index's value;
[val1, , , , a] = arr;
console.log(a);