const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const mongoose = require("mongoose");
const { visitor } = require("../schema/Visitor")


const myVisitor = new mongoose.model("visitor", visitor);

const checkValidaton = [
    check("name")
        .isAlpha()
        .withMessage("Your name must be container with alphabates")
        .isLength({ min: 4 })
        .withMessage("Your name must be contained with atleast 10 characters"),
    check("email")
        .isEmail()
        .withMessage("Email is not valid")
        .trim(),
    check("message")
        .isLength({ min: 10 })
        .withMessage("Your message must be contained with atleast 10 characters")

]

function form_validation(req, res, next) {
    const error = validationResult(req);
    const mappedError = error.mapped();

    if (Object.keys(mappedError).length === 0) {
        next();
    } else {
        res.status(500).json({
            errors: mappedError
        })
    }
}

module.exports = {
    checkValidaton, form_validation
}