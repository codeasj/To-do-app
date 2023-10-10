const mongoose = require("mongoose")
require("dotenv").config();

dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then( () => console.log("Connection succesfull"))
    .catch( (error) => {
        console.log("Issue in connection");
        console.error(error.message);
        process.exit(1);
    })
} 

module.exports = dbConnect;