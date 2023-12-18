// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })



// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))




//     const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens




// The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.
// How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

//   const square = async function (n) {
//     return n * n
//   }
  
//   square(2)


// const square = async function (n) {
//     return n * n
//   }
//   const value = await square(2)
//   console.log(value)



// fetching api using promise
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })
  .catch(error => console.error(error))


//fetching api using async and await
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
    //   console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()