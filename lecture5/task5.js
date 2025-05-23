function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Hello World'));