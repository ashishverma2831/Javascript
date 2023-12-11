function fullName(){
    console.log('Ashish Verma')
}
// fullName()

function fullName(firstName,lastName){
    console.log(`${firstName} ${lastName}`);
}
fullName('Ashish','Verma')

function add(x,y){
    return x+y;
}

function areaOfRectangle(x,y){
    return x*y
}

function checkSeason(num){
    if(num===1 || num===2 || num===3)
        return 'Summer';
    else if(num===4 || num===5 || num===6)
        return 'Autumn';
    else if(num===7 || num===8 || num===9)
        return 'Spring'
    else if(num===11 || num===12 || num===10)
        return 'Winter'
    else console.log('Wrong Input');
}

console.log(checkSeason(7));

function findMax(a,b,c){
    return a>b?(a>c?a:c):(b>c?b:c)
}
console.log(findMax(2,5,1))