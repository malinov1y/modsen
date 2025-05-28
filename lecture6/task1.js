function countNumericValues(obj) {
    let result = Object.values(obj).filter((value) => typeof value === 'number').length;
    return result;
}

console.log(countNumericValues({ 
    "apple": 1.2,
    "3": 0.8,
    "8": 1.5,
    "mango": "hello"
 }));