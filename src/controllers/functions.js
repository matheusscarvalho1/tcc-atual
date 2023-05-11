const ModelUsers = require('../models/users')
const ModelDatas = require('../models/datas')

const bcrypt = require ('bcrypt');
const { crypto } = require('../utils/passwords');
const ModelUser = require('../models/users');



// Nome na header

// async function welcome(req, res) {
//     const { id } = req.query

//     const Username = await ModelUser.findbyId(id) 

//         res.render('homepage', {
//             title: 'Bem vindo',
//             Username,
//         })
//  }

//  // function soma de horas acumulativas
//  async function sumHrs(req, res) {
//     const { id } = req.query

//     const hras = await ModelDatas.findbyId(id) 

//         res.render('homepage', {
//             title: 'Bem vindo',
//             hras,
//         })
//  }
 


//Função p/ renderizar Página Cadastro
function index (req, res) {
    res.render('cadastro', {
       title:'Cadastro'
   })
}



// Função p/renderizar Página App
function app (req, res) {
    res.render('app', {
    title:'Conversor'
    })
 }

// login
//  const login = async (req, res) => {
        
//     const { rga, password } = req.body;
//     console.log (rga, password)

//     try {
//         const user = await loginService;
//         console.log(user);   


//         if (!user){
//             return res.status(404).send ({message: "User not found!"})
    
//         }

//     const passwordIsValid = await bcrypt.compareSync(password, user.password);

//     res.send("ok");
//     console.log(passwordIsValid)

//     if (!passwordIsValid){
//         return res.status(400).send ({message: "Invalid Password!"})

//     }
         
//     } catch (err) {
//         res.status(500).send (err.message);
//     }
    
   

//    // const senha = await bcrypt.compare(password, usuario.senha);


    
//   }

//Upload

   


 // Função assíncrona p/ fazer cadastro de usuário no bd
async function add (req, res) {

    const user = new ModelUsers ({
        name: req.body.name,
        rga: req.body.rga,
        email: req.body.email,
        password: await crypto (req.body.password)
    });

    user.save()
    res.redirect('/')

}




// Função assíncrona p/ fazer cadastro de dados no bd

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


//Função assíncrona p/ lista os dados que estão cadastrado no banco (app)
async function listData (req, res) {
   const dataUsers = await ModelDatas.find()

    res.render('appList', {
    title: 'Listagem e cadastro de dados',
    dataUsers,
    })
}


//Função assíncrona p/ editar os dados que estão cadastrado no banco (app)
async function indexEdit(req, res) {
const { id } = req.query

const data = await ModelDatas.findById(id)

    res.render('edit', {
        title: 'Editar dados',
        data,
    })
}


async function edit (req, res) {
    const {
        name,
        rga,
        email,
        course,
        phone,
        type,
        file,
        hrsD,
        msg,
    } = req.body
    
    const { id } = req.params

    const user = await ModelDatas.findById(id)

    user.name = name
    user.rga = rga
    user.email = email
    user.course = course
    user.phone = phone
    user.type = type
    user.file = file
    user.hrsD = hrsD
    user.msg = msg

    user.save()

    res.render('edit', {
        title: 'Editar Dados',
        user,
        message: 'Alterado com sucesso!'
    })
}


//Função assíncrona p/ remover os dados que estão cadastrado no banco (app)
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
    indexEdit,
    remove,
    edit,
    //welcome,


    
    }