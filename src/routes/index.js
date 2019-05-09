const express = require('express')
const routes = express.Router()
const { index,store } = require('../controllers/CategoriaController')

routes.get('/',(req,res)=>{
    res.render('pages/home')
});

routes.get('/categorias',index)
routes.post('/categorias',store)


module.exports = routes