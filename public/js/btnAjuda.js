;(function(){
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function(){
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', env + 'api/instrucoes/listar');
        xhr.responseType = "json";
        xhr.send();
        xhr.addEventListener("load", function(){
            const objeto = xhr.response;
            const ajudas = objeto.instrucoes;

            ajudas.forEach(function(ajuda){
                adicionaCartaoNoMural(ajuda);
            })
        });
    });
    btnAjuda.classList.remove('no-js');
})()