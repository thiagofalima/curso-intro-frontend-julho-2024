document.querySelector('p').textContent = 'Outro texto'

// document.querySelector('div').style.backgroundColor = 'green'

const botao = document.createElement('button');
const conteudo = document.createTextNode('click here');

botao.appendChild(conteudo)

const division = document.querySelector('div');

division.appendChild(botao);
division.removeChild(botao);

console.log(document.querySelector('p.texto').innerHTML)
console.log(document.querySelector('p.texto').textContent)

document.querySelector('p.texto').innerHTML = '<hr> Alterado via inner HTML'

document.querySelector('p.texto').style.fontStyle = 'italic'
document.querySelector('p.texto').style.color = 'rgba(0, 0, 255, 0.2)'

function addClasse(){
    document.querySelector('h1').classList.toggle('header');
}

