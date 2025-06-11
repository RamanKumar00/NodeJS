const mongoose = require('mongoose');
const mongoURl = 'mongodb://127.0.0.1:27017/hotel'

mongoose.connect(mongoURl,{useNewUrlParser:true,
    useUnifiedTopology:true})

const db = mongoose.connection;

//event listeners
db.on('connected',() => {
    console.log("connected to MongoDB server");
});

db.on('error',() => {
    console.log("MongoDB connection error:",err);
});

db.on('disconnected',() => {
    console.log("MongoDB disconnected",);
});
// db.once('connected',() =>{
//     console.log('waiting for few second');
//     setTimeout(() => { mongoose.disconnect()
        
//     }, 2000);
// })

// export the db coneection to server
module.exports = db;
