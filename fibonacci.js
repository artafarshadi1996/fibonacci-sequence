// Function to calculate the Fibonacci sequence
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Print Fibonacci sequence up to n terms
const numberOfTerms = 10; // Feel free to change this to get more or fewer terms
for (let i = 0; i < numberOfTerms; i++) {
    console.log(fibonacci(i));
}

