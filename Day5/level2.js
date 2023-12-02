// import countries from  "./country";

// countries.forEach(element => {
//     console.log(element)
// });
// console.log(countries.length)
// console.log('Hello')




// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// const newText = text.split(' ')
// console.log(newText);
// console.log(newText.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
// shoppingCart.splice('Honey')
// shoppingCart.splice('Tea','Green Tea')
console.log(shoppingCart.indexOf('Honey'))
console.log(shoppingCart.splice(4,1))
console.log(shoppingCart.splice(3,1,'Green Tea'))
console.log(shoppingCart)

// let flag=0;
// for(let i of shoppingCart){
//     if(i==='Bun'){
//         console.log('Bun is in the array')
//     }
//     else{
//         flag=1;
//     }
// }
// if(flag===1){
//     console.log(shoppingCart.push('Bun'))
// }

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(frontEnd.concat(backEnd))
