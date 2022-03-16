const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

//middle
app.use(express.json());
app.use(cors());
app.use("/books", router);


mongoose.connect("mongodb+srv://ritik:ritik@cluster0.gwykr.mongodb.net/CRUD?retryWrites=true&w=majority ")
    .then(() => console.log('Connect To Database'))
    .then(() => {
        app.listen(8000);
    })
    .catch((err) => console.log(err));