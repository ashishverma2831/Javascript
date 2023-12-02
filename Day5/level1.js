const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


// let arr = new Array();
// let arr5 = new Array(5);
// console.log(arr.length)
// console.log(arr5.length)

// const a = webTechs.pop()
// const a = webTechs.shift()
const a = webTechs.splice((webTechs.length)/2,1)
console.log(a)

const array = ['string',98,true,'',console.log()];
console.log(array)

const companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(companies);
console.log(companies.length);
console.log(companies[0]);
console.log(companies[companies.length-1]);
console.log(companies[3]);
console.log('\n')
companies.forEach(element => {
  console.log(element)
});

const newCompanies = companies.map((n)=>{
  return n.toUpperCase();
})
console.log(newCompanies)
console.log(newCompanies.toString()
)

const ab = 'Apple';
companies.forEach(element => {
  if(ab===element){
    console.log('Found it')
  }
  // else{
  //   console.log('No')
  // }
});

console.log('\n')

const oCompanies = companies.filter((e)=>{
  let count=e.split('o').length-1;
  if(count>1){
    return e;
  }
})
// console.log(oCompanies)
// console.log(companies.sort())
// console.log(companies.reverse())
// console.log(companies.slice(0,3))
// console.log(companies.slice(4))
// console.log(companies.slice(3,4))
// console.log(companies)
console.log('\n')
// console.log(companies.shift())
// console.log(companies.splice(2,1))
// console.log(companies.pop())
// console.log(companies.shift())
console.log('\n')
console.log(companies)
console.log(companies.splice(0,companies.length))
console.log(companies)