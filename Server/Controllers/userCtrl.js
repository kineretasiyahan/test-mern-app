const userModel = require("../Models/userModel");

async function getUser(req, res) {
    try {
        await userModel.find({}, (error, result) => {
            if (error) throw error;
            console.log(result)
            res.json({ massage: "sucsses getUsers", data: result });
        })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in getUsers" }
        res.json(errorMsg.massage)
    }
}

async function createUser(req, res) {
    try {
        await userModel.insertMany(req.body.user, (error, result) => {
            if (error) throw error;
            console.log(result)
            res.json({ massage: "sucsses createUsers", data: result });
        })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in createUsers" }
        res.json(errorMsg.massage)
    }
}

module.exports = {getUser,createUser};