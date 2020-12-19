const {MongoClient}= require('mongodb')

const dbName = 'api-terminal'
const url = 'mongodb://localhost:27017/'+ dbName
const client = new MongoClient(url,{ useUnifiedTopology: true })

async function conectar(){
  await client.connect(function(err){
    if(err){
      console.log('err')
      return
    }
    console.log('Conectado a mongoDB')
  })
}


