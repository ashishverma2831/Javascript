const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort())
console.log(ages[ages.length-1])
console.log(ages[0])

let sum=0;
for (let i=0;i<ages.length;i++){
    sum+=ages[i];
}
let n=ages.length/2-1;
console.log(n)
console.log(sum/ages.length)
console.log(ages.splice(n))
