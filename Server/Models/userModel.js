const moongose = require('mongoose');
const Schema = moongose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
});

const userModel=moongose.model('user',userSchema)
module.exports=userModel;