const array = [10, 15, 20, 30, 25];

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max
}

console.log(findMax(array));