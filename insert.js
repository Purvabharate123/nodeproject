const {MongoClient} = require('mongodb')

//url ofmongodb
const url = "mongodb+srv://purvab:purva123@cluster0.j6uqj.mongodb.net/test"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()
        //for insert
       // const myobj = [//{name : "Purva", age:"22", address:"Pune"},
            //{name : "Pooja", age:"22", address:"Pune"},
           // {name : "Rakesh", age:"23", address:"Pune"},
            //{name : "Raj", age:"24", address:"Pune"}
         //   {_id:"151", name:"purva"},
           // {_id:"152", name:"rakesh"},
       // ]
       // const result = await db.collection('mydatabase').insertMany(myobj)
        //console.log(`Inserted ${result.insertedId}`);
      //  const result = await db.collection('mydatabase').find({}, {projection:{_id :0, name:1}}).toArray()
        //console.log(result);
       // console.log(result._id);
       // console.log(result.name);

      // var query = {address: "Pune"} 
       //const newvalue = {$set : {name:"will", address:"USA"}}
       //const result = await db.collection('mydatabase').updateOne(query, newvalue)
       //console.log(result);
       //const result = await db.collection('mydatabase').find().limit(3).toArray()
       //console.log(result);
 
       const result = await db.collection('dummy').drop
       console.log(result);


    } catch (error) {
        console.error(error);
    }
    finally{
        client.close()
    }
}

run()