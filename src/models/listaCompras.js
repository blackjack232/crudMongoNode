const mongoose = require("mongoose");

const listaComprasSchema = mongoose.Schema({
    cantidad:{
        type: Number,
        required: true
    },
    nombreProducto:{
        type: String,
        required: true
        
    }
});

module.exports = mongoose.model('ListaCompras', listaComprasSchema);