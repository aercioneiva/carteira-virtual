const mongoose = require('mongoose')

const Movimentacao = new mongoose.Schema(
    {
        valor:{
            type: Number,
            required: true
        },
        observacao:{
            type: String
        },
        categoria:{ type: mongoose.Schema.Types.Objectid, ref: 'Categoria'}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Movimentacao', Movimentacao);