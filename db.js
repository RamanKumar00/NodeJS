const { error } = require('console');
const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURl = 'mongodb://127.0.0.1:27017/hotel'
const mongoURl = 'mongodb+srv://skywriter7321:R%40mankumar1@nodejs-cluster.jme2gp2.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-cluster';

mongoose.connect(mongoURl,{useNewUrlParser:true,
    useUnifiedTopology:true})

const db = mongoose.connection;

//event listeners
db.on('connected',() => {
    console.log("connected to MongoDB server");
});

db.on('error',() => {
    console.log("MongoDB connection error:",error);
});

db.on('disconnected',() => {
    console.log("MongoDB disconnected",);
});
// db.once('connected',() =>{
//     console.log('waiting for few second');
//     setTimeout(() => { mongoose.disconnect()
        
//     }, 2000);
// })

// export the db coneection to server(testing purpose)
module.exports = db;
