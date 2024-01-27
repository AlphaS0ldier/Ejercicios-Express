var express = require('express');
var router = express.Router();
var {multiplicar} = require('../public/helpers/multiplicar');

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('tablaMultiplicar', { title: 'Tabla de Multpicación' });
});

router.post('/', async function(req, res) {

  const { base } = req.body;

  let numbase=parseInt(base);
  let aResultados=[];
  if (Number(numbase)) {
    aResultados=await multiplicar(numbase);
    console.log(aResultados);
  }
  
  res.render('respuestaMultiplicar', { resultados:aResultados});
});

module.exports = router;
