// let height = prompt('Enter height')
// let base = prompt('Enter base ')
// area = 1/2*height*base;
// console.log(area)\



// let a = prompt('enter side a')
// let b = prompt('enter side b')
// let c = prompt('enter side c')
// perimeter = Number(a)+Number(b)+Number(c);
// console.log(perimeter)



// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let name1 = prompt('Enter your name')
// if(name1.length>7){
//     alert("Name is too long")
// }
// else{
//     alert('name is too short')
// }


// const age=114;
// const age1=4;
// console.log("i am "+(age-age1) +" years older than you")


// birthYear = Number(prompt('Enter birth year'))
// let currentYear = new Date().getFullYear();
// // console.log("You are "+(currentYear - birthYear)+" years old")
// if((currentYear-birthYear)>=18){
//     console.log("You are "+(currentYear - birthYear)+" years old. You are old enough to drive")
// }
// else{
//     console.log("You are "+(currentYear - birthYear)+" years old. You are not yet ready to drive")
// }


// let year = prompt('enter number of years you live')
// console.log(year*365*24*60*60)


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${year}-${month}-${date} ${hours}:${minutes}`) // 4/1/2020 0:56
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) // 4/1/2020 0:56
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56