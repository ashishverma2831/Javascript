const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((n)=>{
  console.log(n);
})
names.forEach((n)=>{
  console.log(n);
})
numbers.forEach((n)=>{
  console.log(n);
})

const c = countries.map((name)=>{
  return name.toUpperCase()
})
console.log(c);

const num = numbers.map((n)=>{
  return n**2
})
console.log(num);
console.log(products);

// const six = countries.filter((country)=>{
//   return country.length === 6
// })
// console.log(six );

// const six = countries.filter((country)=>{
//   return country.startsWith('I')
// })
// console.log(six);


const six = products.map((n)=>{
  return n.price
})
console.log(six);

const a = numbers.reduce((acc,curr)=>acc+curr,0)
console.log(a);