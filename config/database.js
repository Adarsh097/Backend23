const mongoose = require('mongoose');
// function to establish the connection with db of server

// when we establish the connection, it return the promise
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() => {console.log(`Database Connected.`)})
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;