"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
age = 19;
// arrays
let ninjas = [];
ninjas = ['gama', 'bima', 'zenge'];
// union types
let mixed = [];
mixed.push('hihihi');
mixed.push(20);
mixed.push(false);
console.log(mixed);
let uid;
uid = '123';
uid = 123;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 20 };
let ninjaTwo;
ninjaTwo = {
    name: 'jiji',
    age: 22,
    beltColor: 'hhkhk'
};
// any types
let umur = 20;
console.log(umur);
umur = 'jalfjal';
console.log(umur);
let mixedArr = [];
mixedArr.push(5);
mixedArr.push('aldflah');
mixedArr.push({ name: 'gigi', age: 20 });
console.log(mixedArr);
