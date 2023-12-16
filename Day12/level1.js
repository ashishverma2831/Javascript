// without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern)


// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)

// let regEx= /love/gi


// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)


// const str = 'I love JavaScript love'
// const pattern = /Love/gi
// const result = str.match(pattern)
// console.log(result)



const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)