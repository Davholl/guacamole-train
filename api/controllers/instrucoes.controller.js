exports.listar = function (req, res) {
    res.send({
        instrucoes: [
            {
                conteudo: "Bem vindo ao Ceep 1337!",
                cor: "#FFAA10"
            },
            {
                conteudo: "O site é otimizado para a rapaziada!",
                cor: "#45AAEE"
            },
            {
                conteudo: "Para mudar o layout, clique no botão cabecão",
                cor: "#FF1010"
            }
        ]
    });
};