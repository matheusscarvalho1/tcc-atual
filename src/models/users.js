const mongoose = require('mongoose')

//CADASTRO DE USUARIOS
const schemaUsers = new mongoose.Schema ({
    name: String,
    rga: {type: Number, unique: true},
    email: String,
    password: String,
    
}, {timestamps: true})
const ModelUser = mongoose.model('Users', schemaUsers)

module.exports =  ModelUser