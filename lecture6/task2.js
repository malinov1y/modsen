function combineKeysAndValues(keys, values) {
    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
}

console.log(combineKeysAndValues(
    [1, 2, 5, 8], ["apple", "banana", 18, 20]
))