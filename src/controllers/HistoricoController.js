const Movimentacao = require('../models/Movimentacao')
const Categoria = require('../models/Categoria')
const moment = require('moment')
HistoricoController = {}

HistoricoController.index = async (req, res) => {
    const mov = await Movimentacao.find()
    const cat = await Categoria.find()
    

    mov.forEach((m,ind) => {
        const tipo = (m =='E') ? 'Entrada' : 'Saída'
        const createdAt = moment(m.createdAt).format('L')
        const categoria = cat.filter(c => c._id == m.categoria)[0].name
        mov[ind] = {...m, tipo,createdAt, categoria}
    })

    res.render('pages/historico',{mov,cat})
}

module.exports = HistoricoController