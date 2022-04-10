"use strict";
let greet;
greet = () => {
    console.log('hello gang\'s');
};
const add = (a, b, c = 22) => {
    console.log(a + b);
    console.log(c);
};
add(4, 8);
const minus = (a, b) => {
    return a + b;
};
let result = minus(2, 2);
let strNum;
strNum = 88;
strNum = 'jalfj';
