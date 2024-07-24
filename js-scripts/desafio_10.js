function padronizaNome(nome){
    return nome.slice(0, 1).toUpperCase() + nome.slice(1, nome.length).toLowerCase();
}

var nome = padronizaNome("tHiAgO")
console.log(nome)