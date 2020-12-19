const { response } = require('express')
const bodyParcer = require('body-parser')
const {MongoClient}= require('mongodb')
const express = require('express')
const app = express()
const port = 3000




// --- Configuracion mongoDB
const dbName = 'api-terminal'
const url = 'mongodb://localhost:27017/'+dbName
const client = new MongoClient(url,{ useUnifiedTopology: true })
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/interfaz'))



async function conectar(){
  client.connect(function (err) {
    if (err) {
      console.log('Error en la conexion a MongoDB')
      return
    }
    console.log('Conexion a MongoDB')
  })
}

async function traerViajeros(){
  let db = client.db(dbName)
  let collection = db.collection('Travelers')

  collection.find().toArray(function(err,docs){
  console.log(docs)

  })
}

async function guardarViajeros(user){
  let db = client.db(dbName)
  let collection = db.collection('Travelers')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}
async function eliminarViajeros(user){
  let db = client.db(dbName)
  let collection = db.collection('Travelers')

  collection.deleteOne(user , function(resultado){
  console.log(resultado)

  })
}
async function actualizarViajeros(user){
  let db = client.db(dbName)
  let collection = db.collection('Travelers')

  collection.updateOne(user , function(resultado){
  console.log(resultado)

  })
}
//----------- Configuracion vehiculos---------------

async function traerVehiculos(){
  let db = client.db(dbName)
  let collection = db.collection('vehiculo')

  collection.find().toArray(function(err,docs){
  console.log(docs)

  })
}

async function guardarVehiculos(user){
  let db = client.db(dbName)
  let collection = db.collection('vehiculo')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}
async function eliminarVehiculos(user){
  let db = client.db(dbName)
  let collection = db.collection('vehiculo')

  collection.deleteOne(user , function(resultado){
  console.log(resultado)

  })
}
async function actualizarVehiculos(user){
  let db = client.db(dbName)
  let collection = db.collection('vehiculo')

  collection.updateOne(user , function(resultado){
  console.log(resultado)

  })
}

async function traerEmpresa(){
  let db = client.db(dbName)
  let collection = db.collection('empresa')

  collection.find().toArray(function(err,docs){
  console.log(docs)

  })
}

async function guardarEmpresa(user){
  let db = client.db(dbName)
  let collection = db.collection('empresa')

  collection.insertOne(user , function(resultado){
  console.log(resultado)

  })
}
async function eliminarEmpresa(user){
  let db = client.db(dbName)
  let collection = db.collection('empresa')

  collection.deleteOne(user , function(resultado){
  console.log(resultado)

  })
}
async function actualizarEmpresa(user){
  let db = client.db(dbName)
  let collection = db.collection('empresa')

  collection.updateOne(user , function(resultado){
  console.log(resultado)

  })
}

conectar()
traerViajeros()

//----------------------------------

//-----Usuario---------------------
app.use(bodyParcer.json())

app.get('/Travelers',(req, res) => {
  traerViajeros()
  res.send('Mostrar Usuarios')
})

app.post('/Travelers/agregar', (req, res) => {
  guardarViajeros(req.body)
  console.log(req.body)
  res.send('Agregado '+ req.body.nombre)
})

app.delete('/Travelers/eliminar', (req, res) => {
  eliminarViajeros(req.body)
  console.log(req.body)
  res.send('Eliminado ' + req.body.nombre)
})

app.put('/Travelers/actualizar', (req, res) => {
  actualizarViajeros(req.body)
  res.send('Actualizado' + req.body.nombre)
})

//--------Vehiculo------------------------

app.get('/vehiculo',(req, res) => {
  traerVehiculos(req.body)
  res.render('Mostrar Usuarios')
})

app.post('/vehiculo/agregar', (req, res) => {
  guardarVehiculos(req.body)
  console.log(req.body)
  res.send('Usando post'+ req.body)
})

app.delete('/vehiculo/elminar', (req, res) => {
  eliminarVehiculos(req.body)
    res.send('Eliminado ' + req.body.nombre)
})

app.put('/vehiculo/actualizar', (req, res) => {
  actualizarVehiculos(req.body)
  res.send('Actualizado ' + req.body.nombre)
})

//-----Empresa----------------------------------

app.get('/empresa',(req, res) => {
  traerEmpresa(req.body)
  res.send('Mostrar Usuarios')
})

app.post('/empresa/agregar', (req, res) => {
  guardarEmpresa(req.body)
  console.log(req.body)
  res.send('Usando post'+ req.body.nombre)
})

app.delete('/empresa/elminar', (req, res) => {
  eliminarEmpresa(req.body)
    res.send('Eliminado ' + req.body.nombre)
})

app.put('/empresa/actualizar', (req, res) => {
  actualizarEmpresa(req.body)
  res.send('Actualizado ' + req.body.nombre)
})
//-------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

