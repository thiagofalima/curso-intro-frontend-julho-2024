var senha = prompt("Digite uma senha de 6 dígitos: ");

while(senha.length !== 6){
    alert("Quantidade de dígitos inválida!");
    var senha = prompt("Digite uma senha de 6 dígitos: ");
}

alert("Bem-vindo ao sistema!");