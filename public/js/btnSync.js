;(function(){
    const btnSync = $("#btnSync");
    btnSync.click(function(){
        sincronizar();
    });

    btnSync.removeClass('no-js');
    this.sincronizar = function(){
        btnSync.addClass("botaoSync--esperando");
        btnSync.removeClass("botaoSync--sincronizado");
        this.sincronizarConfig();
        this.sincronizarCartoes();
    }
    this.sincronizarConfig = function(){
        const salvadorDeConfig = new XMLHttpRequest();
        salvadorDeConfig.open('POST', env + 'api/configuracoes/incluir');
        salvadorDeConfig.setRequestHeader("Content-Type", "application/json");
        var direcaoAtual = document.querySelector(".mural").classList.contains("muralLinhas")?"rows":"columns";
        const config = {
            usuario: "dav-holl@hotmail.com"
            ,direcao: direcaoAtual
        }
        salvadorDeConfig.send(JSON.stringify(config));

    }
    this.sincronizarCartoes = function(){
        const salvadorDeCartoes = new XMLHttpRequest();
        salvadorDeCartoes.open('POST', env + 'api/cartoes/incluir');
        salvadorDeCartoes.setRequestHeader("Content-Type", "application/json");

        const infosDoMural = {
            usuario: "dav-holl@hotmail.com"
            ,cartoes: Array.from($(".cartao")).map(function(cartao){
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").textContent
                    ,cor: getComputedStyle(cartao).getPropertyValue("background-color")
                }
            })
        }

        salvadorDeCartoes.send(JSON.stringify(infosDoMural));

        salvadorDeCartoes.addEventListener("load", function(){
            const response = JSON.parse(salvadorDeCartoes.response);
            console.log(`${response.quantidade} cartões salvos em ${response.usuario}`);

            btnSync.removeClass("botaoSync--esperando");
            btnSync.addClass("botaoSync--sincronizado");
        });

        salvadorDeCartoes.addEventListener("error", function(){
            btnSync.removeClass("botaoSync--esperando");
            btnSync.addClass("botaoSync--deuRuim");
        });
    } 
})()