var lista = [];
function fizzBuzz(numero){
    if (numero % 3 === 0 && numero % 5 === 0){
        lista.push("FizzBuzz");
    }else if (numero % 3 === 0){
        lista.push("Fizz");
    }else if (numero % 5 === 0){
        lista.push("Buzz");
    }else{
        lista.push(numero);
    }
}
for (var i = 1; i < 16; i++){
    fizzBuzz(i)
}
console.log(lista);