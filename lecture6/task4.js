const obj = { a: 1, b: 2, c: 3, d: 4 };

function removeKeys(obj, keysArr) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (keysArr.includes(key)) {
            delete obj[key];
        }
    }
}

removeKeys(obj, ['a', 'c']);
console.log(obj); // { b: 2, d: 4 }
