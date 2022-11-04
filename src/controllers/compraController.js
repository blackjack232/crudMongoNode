const listaComprasSchema = require("../models/listaCompras");


module.exports = {
    createCompra: async (req, res) => {
        const compra = await listaComprasSchema(req.body);
        compra
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    }
}