let firstName = 'ashish';
let lastName = 'verma';
let country = 'India';
let city = 'Lucknow';
let age = 22;
let isMarried = false;
let year = 2023

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log('\n\n')
console.log(typeof('10')==typeof(10))
console.log(typeof('10')===typeof(10))

console.log(parseInt('9.8')==10)
console.log(parseInt('9.8')===10)

let x = true;
let y = 4>3;
let z = 'hello'

let xf = false;
let yf = 0;
let zf = null;

console.log(4==='4')
console.log('python'.length!='jargon'.length)

console.log(!(4==='4'))
console.log('python'.includes('on') !== true)

// date objects
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(Math.floor(new Date().getTime()/1000.0));