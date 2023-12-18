//let allTitles = document.getElementsByTagName('h1');

//console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }

// allTitles.forEach(title => console.log(title))
// const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class


//another way to setting an attribute
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'


//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')


//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.remove('title', 'header-title')


// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'


const date = new Date();
const month = date.getMonth();
const tareekh = date.getDate();
const year = date.getFullYear();
const hour = date.getHours();
const min = date.getMinutes();

const fullDate = `${tareekh}/${month},${year}  ${hour} ${min}`
console.log(fullDate);

// const r = Math.floor(Math.random()*255+1);
// const g = Math.floor(Math.random()*255+1);
// const b = Math.floor(Math.random()*255+1);

const h2 = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');
// function randomColor(){
//     h2[0].style.backgroundColor=`rgb(${r},${g},${b})`;
//     console.log(`rgb(${r},${g},${b})`);
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }
function randomColor(){
    const r = Math.floor(Math.random()*255+1);
    const g = Math.floor(Math.random()*255+1);
    const b = Math.floor(Math.random()*255+1);
    // const colour = `rgb(${r},${g},${b})`;
    h2[0].style.backgroundColor=`rgb(${r},${g},${b})`;
    h1[0].style.backgroundColor=`rgb(${r},${g},${b})`;
    // console.log(colour);
}
function randomColor2(){
    const r = Math.floor(Math.random()*255+1);
    const g = Math.floor(Math.random()*255+1);
    const b = Math.floor(Math.random()*255+1);
    h1[0].style.backgroundColor=`rgb(${r},${g},${b})`;
    // console.log(colour);
}
setInterval(randomColor,1000)
setInterval(randomColor2,1000)

function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

const liItems = document.querySelectorAll('li');
// for (let i=0;i<liItems.length;i++) {
//     const pattern = /challenge done/gi
//     liItems[i].textContent.match(pattern)?liItems[i].style.backgroundColor='green':liItems[i].style.backgroundColor='red'
// };
for (let i=0;i<liItems.length;i++) {
    const pattern1 = /challenge ongoing/gi
    liItems[i].textContent.match(pattern1)?liItems[i].style.backgroundColor='yellow':liItems[i].style.backgroundColor='red'
};