const Categoria = require('../models/Categoria')

exports.index = async (req, res) => {
    const cat = await Categoria.find();
    res.render('pages/categoria',{cat})
}

exports.store = async (req, res) => {
    await Categoria.create({name:req.body.name});
    const cat = await Categoria.find();
    res.render('pages/categoria', {cat})
}