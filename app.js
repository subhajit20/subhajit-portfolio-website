require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const path = require("path");
/************************ PORT *********************/
const PORT = process.env.PORT || 5001

/******************** Internal Imports *****************/
const { Error404, commonError } = require("./middleware/CommonError");
const { submitRoute } = require("./routes/submitFormRoute");



/***************** Mongodb connection*******************/
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connection is succesfully done...")
    }).catch(() => {
        console.log("Connection failed...")
    })


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));


/******************** submit Route *****************/
app.use(submitRoute);

__dirname = path.resolve();

if (process.env.NODE_ENV) {
    app.use(express.static(path.join(__dirname, "frontend/build")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api is runnng...")
    })
}

/**************** Handing Error **************/
app.use((req, res) => {
    res.status(500).json({
        erros: "Page not found"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})