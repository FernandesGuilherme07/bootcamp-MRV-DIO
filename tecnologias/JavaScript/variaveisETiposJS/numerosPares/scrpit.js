const substituiPares = (arr) => {
    if(!arr) return 'insira um array!';
    if(!arr.length) return 'insira um array valido!';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(`${arr[i]} voçê já é zero!!`);
        } else if (arr[i] % 2 === 0) {
            console.log(`substituindo ${arr[i]} por 0...`);
            arr[i] = 0;
        }
    }
    return arr;
}
let array = [0, 1, 3, 5, 6, 90, 100, 1001]

console.log(substituiPares(array))