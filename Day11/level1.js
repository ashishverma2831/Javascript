//destructing and spreading
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)


// const names = ['Asabeneh', 'Brook', 'David', 'John']
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

// console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)


const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)


// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width, height, area, perimeter } = rectangle
  
//   console.log(width, height, area, perimeter)



  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle
  
  console.log(w, h, a, p)



  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)