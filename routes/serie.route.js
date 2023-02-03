const express = require('express');
const serieCtrl = require('../controllers/serie.controller');
const router = express.Router();

router.get('/', serieCtrl.getSeries);
router.get('/seriesgenre/:genre', serieCtrl.getSeriesGenre);
router.get('/serie/:id', serieCtrl.getSerie);
router.get('/seriename/:name', serieCtrl.getSerieName);
router.post('/', serieCtrl.addSerie);
router.put('/:id', serieCtrl.updateSerie);
router.delete('/:id', serieCtrl.deleteSerie);

router.get('/genres', serieCtrl.getGenres);

module.exports = router;