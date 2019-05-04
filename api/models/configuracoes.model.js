const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConfigSchema = new Schema({
    usuario: {type: String, required: true},
    direcao: {type: String, required: true}
});

module.exports = mongoose.model('Config', ConfigSchema);