// explicit types
let character: string
let age: number
let isLoggedIn: boolean

age = 19

// arrays
let ninjas: string[] = []

ninjas = ['gama', 'bima', 'zenge']

// union types
let mixed: (string|number|boolean)[] = []
mixed.push('hihihi')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string|number
uid = '123'
uid = 123

// objects
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 20 }

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = {
  name: 'jiji',
  age: 22,
  beltColor: 'hhkhk'
}

// any types
let umur: any = 20
console.log(umur)
umur = 'jalfjal'
console.log(umur)

let mixedArr: any[] = []

mixedArr.push(5)
mixedArr.push('aldflah')
mixedArr.push({ name: 'gigi', age: 20 })

console.log(mixedArr)
