   /* const saoIguais = num1 === num2;
    const soma = num1 + num2;

    // iF COMUM
        if (sao iguais){
            return"São iguais!" 
        }
        return "Não são iguais!"
         

    // IF TERNÁRO
        return saoIguais ? "São iguais!" : "Não são iguais!";
    */


        function comparaNumeros(num1, num2) {
            const primeiraFrase = criaPrimeiraFrase(num1, num2);
            const segundaFrase = criaSegundaFrase(num1, num2);
            
            if(!num1 || !num2) return "Defina dois números!";
            if(Number.isInteger(num1) === false) {
                return "O primeiro valor não é um número. Digite um numero válido!";
            }
            if(Number.isInteger(num2) === false) {
                return "O segundo valor não é um número. Digite um numero válido!";
            }
            return `${primeiraFrase} ${segundaFrase}` ;
           
        }
        
        function criaPrimeiraFrase(num1, num2) {
            let primeiraFrase = `Os números ${num1} e ${num2}`;
            let simNao = 'não';
        
            if (num1 === num2) {
                simNao = '';
            }
        
            return `${primeiraFrase} ${simNao} são iguais.`;
        }
        
        function criaSegundaFrase(num1, num2) {
            const soma = num1 + num2;
            let comparaDez = 'menor';
            let comparaVinte = 'menor';
            
            if (soma > 10) {
                comparaDez = 'maior';
            }
        
            if (soma > 20) {
                comparaVinte = 'maior';
            }
        
            return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
        }
        
        console.log(comparaNumeros(true, 5));
