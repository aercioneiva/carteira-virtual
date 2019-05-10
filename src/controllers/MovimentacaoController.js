const Movimentacao = require('../models/Movimentacao')
const Categoria = require('../models/Categoria')
MovimentacaoController = {}

MovimentacaoController.index = async (req, res) => {
    const mov = await Movimentacao.find()
    const cat = await Categoria.find()
    res.render('pages/movimentacao',{mov,cat})
}

MovimentacaoController.store = async (req, res) => {
    let mov = {}
    mov.valor = parseFloat(req.body.valor.replace(',','.'))
    mov.tipo = req.body.tipo
    mov.categoria = req.body.categoria
    mov.observacao = req.body.observacao

    console.log(mov)
    await Movimentacao.create(mov);
    const cat = await Categoria.find()
    mov = Movimentacao.find()
    res.render('pages/movimentacao',{mov,cat})
}

module.exports = MovimentacaoController