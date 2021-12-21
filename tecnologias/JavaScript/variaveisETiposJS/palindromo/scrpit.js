const palindromo = (texto) => {
    if(typeof texto !== 'string') return "o valor não é um texto";

    let invertida = texto.split("").reverse().join("");
    
    return `seu texto de trás para frente é ${invertida}`;
}

console.log(palindromo('guilherme'))

const verificaPalindromo = (texto) => {
    if(typeof texto !== 'string') return "o valor não é um texto";

    for (let i = 0; i < texto.length / 2; i++) {
       if(texto[i] !== texto[texto.length -1 - i]) {
        return false;
        }
    }   
    
    return true;
}

console.log(verificaPalindromo("ovo"))