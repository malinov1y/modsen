const getStringsLengths = (strings) => {
    return strings.map(str => str.length);
};

console.log(getStringsLengths(['apple', 'banana', 'cherry']));