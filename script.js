const resumo = document.getElementById('resumo');
const vermais = document.getElementById('vermais');

vermais.addEventListener('click', function(){
    resumo.classList.toggle('expandido');
    if(resumo.classList.contains('expandido')){
        vermais.textContent = 'Ver menos';
    } else {
        vermais.textContent = 'Ver mais';
    }
});
