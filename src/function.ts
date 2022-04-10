let greet: Function

greet = () => {
  console.log('hello gang\'s')
}

const add = (a: number, b: number, c: number | string = 22): void => {
  console.log(a + b)
  console.log(c)
}

add(4, 8)

const minus = (a: number, b: number) => {
  return a + b;
}

let result = minus(2, 2)

// type aliases
type StringOrNum = string | number

let strNum: StringOrNum
strNum = 88
strNum = 'jalfj'

// i'm making new branch for functions
