const dog ={
    name:'suar',
    legs:4,
    color:'brown',
    age:8,
    bark:function(){
        return 'woof woof';
    }
}

console.log(dog);
const dogBark = dog.bark();
console.log(dogBark);
console.log(Object.values(dog));

dog.breed='abcde',
console.log(dog);

// dog.getDogInfo(){
//     return 'hello lukhe'
// }
// console.log(dog.getDogInfo());