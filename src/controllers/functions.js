const ModelUsers = require('../models/users')
const ModelDatas = require('../models/datas')

const { crypto } = require('../utils/passwords')



function index (req, res) {
    res.render('cadastro', {
       title:'Cadastro'
   })
}

function app (req, res) {
    res.render('app', {
    title:'Conversor'
    })
 }

async function add (req, res) {

    const user = new ModelUsers ({
        name: req.body.name,
        rga: req.body.rga,
        email: req.body.email,
        password: await crypto (req.body.password)
    });

    user.save()
    res.send('cadastro realizado!')

}

 async function addData (req, res) {
    const datas = new ModelDatas ({
        name: req.body.name,
        rga: req.body.rga,
        email: req.body.email,
        course: req.body.course,
        phone: req.body.phone,
        type: req.body.type,
        file: req.body.file,
        hrsD: req.body.hrsD,
        msg: req.body.msg
    });

    datas.save()
    res.redirect('/appList')
    }

async function listData (req, res) {
   const dataUsers = await ModelDatas.find()

    res.render('appList', {
    title: 'Listagem e cadastro de dados',
    dataUsers,
    })
}

async function remove (req, res) {
    const { id } = req.params

    const remove = await ModelDatas.deleteOne({ _id:id })

    if (remove.ok) {
        res.redirect('/appList')
    }
}


module.exports = {
    add,
    addData,
    index,
    app,
    listData,
    remove,
    }