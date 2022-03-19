const express = require("express");
const { checkValidaton, form_validation } = require("../middleware/form_valiadation");
const { userSubmition } = require("../controller/reactForm_validation");
const { uploadFile } = require("../middleware/File_uploader")
const submitRoute = express.Router();

submitRoute.post('/submit', uploadFile, checkValidaton, form_validation, userSubmition);

module.exports = {
    submitRoute
}