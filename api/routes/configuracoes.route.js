const express = require('express');
const router = express.Router();

const configuracoesController = require('../controllers/configuracoes.controller');

router.get('/:usuario', configuracoesController.configPorEmail );
router.post('/incluir', configuracoesController.salvarConfig );

module.exports = router;