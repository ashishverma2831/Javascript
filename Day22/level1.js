// syntax
// document.createElement('tagname')


// let title = document.createElement('h1')
//         title.className = 'title'
//         title.style.fontSize = '24px'
//         title.textContent = 'Creating HTML element DOM Day 2'


// let title
// for (let i = 0; i < 3; i++) {
//     title = document.createElement('h1')
//     title.className = 'title'
//     title.style.fontSize = '24px'
//     title.textContent = i
//     console.log(title)
// }

// document.body.appendChild(title)


// const ul = document.querySelector('ul')
// const lists = document.querySelectorAll('li')
// for (const list of lists) {
//     ul.removeChild(list)

// }

document.addEventListener("DOMContentLoaded", function() {
    // Get the container div
    const numberContainer = document.getElementById("numberContainer");

    // Function to check if a number is prime
    function isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num !== 1;
    }

    // Generate and append numbers to the container
    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");

        // Check if the number is even, odd, or prime
        if (i % 2 === 0) {
            numberDiv.classList.add("even");
        } else {
            numberDiv.classList.add("odd");
        }

        if (isPrime(i)) {
            numberDiv.classList.add("prime");
        }

        // Set the text content of the div to the current number
        numberDiv.textContent = i;

        // Append the div to the container
        numberContainer.appendChild(numberDiv);
    }
});