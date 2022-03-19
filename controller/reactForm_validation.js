const mongoose = require("mongoose");
const { visitor } = require("../schema/Visitor");

const myVisitor = new mongoose.model("visitor", visitor);


async function userSubmition(req, res) {
    try {

        const newPerson = await new myVisitor(req.body);
        const savedPerson = await newPerson.save();

        res.status(200).json({
            successfull: {
                msg: "Your form is submitted successfully"
            }
        })
    } catch (err) {
        res.status(401).json({
            errors: {
                msg: err.message
            }
        })
    }

}

module.exports = {
    userSubmition
}