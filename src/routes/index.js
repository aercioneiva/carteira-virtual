const express = require('express')
const routes = express.Router()
const CategoriaController = require('../controllers/CategoriaController')
const MovimentacaoController = require('../controllers/MovimentacaoController')
const HomeController = require('../controllers/HomeController')
routes.get('/',HomeController.index);

routes.get('/categorias',CategoriaController.index)
routes.post('/categorias',CategoriaController.store)

routes.get('/movimentacao',MovimentacaoController.index)
routes.post('/movimentacao',MovimentacaoController.store)

module.exports = routes