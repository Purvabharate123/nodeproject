var mango = require('mongodb')
const mongoose = require('mongoose')

const mongurl = 'mongodb+srv://purvab:purva123@cluster0.j6uqj.mongodb.net/web'

mongoose.connect(mongurl)
//default connection
const db = mongoose.connection;
//bind for error event
db.on('error', console.error.bind(console, 'mongodb error'))

db.once('open', ()=>{
    console.log("connection created")
    db.createCollection('mydatabase', (err, result)=>{
        if(err){
            console.error("error while creating collection");
        }else{
            console.log("database is created");
        }
    
        mongoose.connection.close()
})

})