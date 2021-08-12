const mongoose = require("mongoose");
const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Mongoose sucsses") })
    .catch((error) => { console.error("connection error", error.message) })

const db = mongoose.connection
module.exports=db;