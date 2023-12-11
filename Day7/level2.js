let arr = [1,2,3,4,5]
function printArray(array){
    array.forEach(element => {
        console.log(element);
    });
}

console.log(printArray(arr));

function showDateTime(){
    let date = new Date();
    date.getTime
    return date
}
console.log(showDateTime());


function swap(a,b){
    a=a^b;
    b=a^b;
    a=a^b;
    console.log(a,b)
}
console.log(swap(2,4));


function add(...x){
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(add(4,6,7));