const Config = require('../models/configuracoes.model');

exports.salvarConfig = function (req, res, next) {
    limparBase();
    let config = new Config({
            usuario: req.body.usuario,
            direcao: req.body.direcao
        })
    config.save(function (err){
        if(err) return next(err)
        res.send( { direcao: req.body.direcao});
    })
};

exports.configPorEmail = function (req, res) {
    Config.find({
        usuario: req.params.usuario
    }, function (err, configs) {
        if (err) return next(err);
        res.send(configs);
    })
};

function limparBase(){
    Config.deleteMany({}).exec()
}