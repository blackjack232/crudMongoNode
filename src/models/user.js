const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    fechaNacimiento:{
        type: String,
        required: true
        
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    ListCompras:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ListaCompras',
        autopopulate: true
    }]
});

userSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('User', userSchema);