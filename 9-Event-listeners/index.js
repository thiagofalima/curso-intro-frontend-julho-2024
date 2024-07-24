
document.querySelector('button').addEventListener('click', function(){
    alert('Você clicou no botão!');
})

// Arrow

const mouseHandler = () => {
    document.querySelector('h1').classList.toggle('header');
}

document.querySelector('h1').addEventListener('mouseenter', mouseHandler);
document.querySelector('h1').addEventListener('mouseout', mouseHandler);

let palavra = ''

document.querySelector('input').addEventListener('keydown', function(event){
    event.preventDefault();
})

