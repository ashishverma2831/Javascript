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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// for(let i=0;i<countries.length;i++){
//    console.log(countries[i])
// }
// console.log()

// for(let i=countries.length-1;i>=0;i--){
//     console.log(countries[i])
// }
// console.log()

// let i=0;
// while(i<countries.length){
//     console.log(countries[i]);
//     i++;
// }
// console.log()
// let k=0;
// do{
//     console.log(countries[k])
//     k++;
// }while(k<countries.length)


// for(let i=1;i<=10;i++){
//     // console.log(`2 * ${i} = ${2*i}`)
//     console.log(`2 * ${i**2} = ${i**3}`)
// }


// for(let i=1;i<=100;i++){
//     if(i%2===0)
//         console.log(i)
// }



// for(let i=1;i<=100;i++){
//     if(i%2!==0)
//         console.log(i)
// }



// for(let i=2;i<=100;i++){
//   if(checkprime(i)){
//     console.log(i+"a prime number")
//   }
//   else{
//     console.log(i+"not a prime number")
//   }
// }
// function checkprime(n){
//   for(let i=2;i<=n/2;i++){
//     if(n%i===0){
//       return false;
//     }
//   }
//   return true;
// }


// let sum=0;
// for(let i=1;i<=100;i++){
//   sum+=i;
// }
// console.log(sum)

// let sum1=0;
// let sum2=0;
// for(let i=1;i<=100;i++){
//   if(i%2===0)
//     sum1+=i;
//   else
//     sum2+=i
// }
// console.log(sum1)
// console.log(sum2)


// let a = Math.floor(Math.random()*10)+1;
// let b = Math.floor(Math.random()*10)+1;
// let c = Math.floor(Math.random()*10)+1;
// let d = Math.floor(Math.random()*10)+1;
// let e = Math.floor(Math.random()*10)+1;
// console.log(`${a}${b}${c}${d}${e}`)


// let num = Math.floor(Math.random()*100000+1)-Math.floor(Math.random()*10000+1)
// console.log(num)


function stringGen(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

 return text;
}
console.log(stringGen())