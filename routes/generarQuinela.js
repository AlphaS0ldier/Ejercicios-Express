var express = require('express');
var router = express.Router();
var {multiplicar} = require('../public/helpers/multiplicar');

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('generarQuinela', { titles: 'Quinela' });
});

module.exports = router;
