function concatArrays(...args) {
    const array = [];
    for (let arg of args) {
        for (let i of arg) {
            array.push(i);
        }
    }
    return array;
}

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
