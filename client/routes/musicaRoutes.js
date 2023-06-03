const { Router } = require('express');
const musicaController = require('../controllers/musicaController');
const router = Router();


router.post('/', musicaController.adicionarMusica );

router.get('/', musicaController.verTodasMusicas);

router.get('/:id', musicaController.verMusicaPorId);

router.patch('/:id', musicaController.atualizarMusica);

router.delete('/:id', musicaController.deletarMusica);

module.exports = router;