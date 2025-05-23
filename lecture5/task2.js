function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}



console.log(isPrime(7));   // Вывод: true
console.log(isPrime(9));   // Вывод: false
console.log(isPrime(11));  // Вывод: true
