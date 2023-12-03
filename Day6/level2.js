// let number = Math.floor(Math.random()*10)
// function stringGen(yourNumber){
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
//     for (var i = 0; i < yourNumber; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//    return text;
//   }
// console.log(stringGen(number))


// let r = Math.floor(Math.random()*256)
// let g = Math.floor(Math.random()*256)
// let b = Math.floor(Math.random()*256)

// console.log(`rgb(${r},${g},${b})`)

let array = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// const lArray = array.map((country)=>{
//     return country.length;
// })

// console.log(lArray)
// let bArray = new Array();
// wrong h
// for(let i=0;i<array.length;i++){
//     let arrayC = [];
//     let al = array[i].substring(0,3).toUpperCase();
//     arrayC.push(array[i]);
//     arrayC.push(al);
//     arrayC.push(array[i].length);
//     console.log(arrayC)
//     bArray.push(arrayC);
// }
// console.log(bArray)

// console.log(array.filter((e)=>{
//     return e.includes('LAND')
// }))


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(let i=0;i<fullStack.length;i++){
    for(let j=0;j<fullStack[i].length;j++){
        console.log(fullStack[i][j])
    }
  }