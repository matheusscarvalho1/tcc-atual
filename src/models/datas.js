const mongoose = require('mongoose')

//CADASTRO DE DADOS P REGISTRAR AS HORAS
const schemaData = new mongoose.Schema ({
    name: String,
    rga: Number,
    email: String,
    course: String,
    phone: Number,
    type: String,
    file: Buffer,
    hrsD: Number,
    hrsA: Number,
    catA: String,
    msg: String,

    
}, {timestamps: true})
const ModelData = mongoose.model('Datas', schemaData)

module.exports =  ModelData

