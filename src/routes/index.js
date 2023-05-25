const router = require('express').Router()
const express = require('express')

const path = require('path')





const ManagementController = require('../controllers/functions')
const IndexController = require('../controllers/index')
const AppController = require('../controllers/app')

;


//Rotas
router.get('/', IndexController.index)


//Cadastro
router.get('/cadastro', ManagementController.index)
router.post('/cadastro/add', ManagementController.add) 

    

//Registro dos dados
router.get('/app', AppController.app)
router.post('/app/add', ManagementController.addData)

//Listar dados
router.get('/appList', ManagementController.listData)

router.get('/appList', (req, res) => {
   res.render('appList', {
       title:'Cadastre e Visualize suas horas'
   })
})


// editar
router.get('/edit', ManagementController.indexEdit)
router.post('/edit/:id', ManagementController.edit)

// remover
router.get('/remove/:id', ManagementController.remove)












router.get('/homepage', (req, res) => {
   res.render('homepage', {
       title:'Homepage'
   })
})

router.get('/duvidas', (req, res) => {
   res.render('duvidas', {
   title:'Duvidas'
   })
})



module.exports =  router
