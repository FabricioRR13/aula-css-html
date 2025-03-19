document.querySelector('.btn-criar').addEventListener('click', function(event){
    event.preventDefault();

    //pega div que contem todas imagens.
    let caixaDeImagens = document.qyerySelector(img-container);

    // Pegar imagens e conta quantas tem
    let imagens = caixaDeImagens.querySelectorAll('img');


    console.log(imagens);

    if(imagens.length === 0){
        let cxAlerta = document.getElementById('cx-alerta');
        cxAlerta.style.display = 'block'; //mostrar o alerta
    }

})