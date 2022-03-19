const createError = require("http-errors");

function Error404(req, res, next) {
    next(createError("404! Sorry Page is Not Found !!!"))
}

function commonError(err, req, res, next) {
    res.status(500).json({
        msg: err.message
    })
}


module.exports = {
    Error404, commonError
}