const express = require("express");
const app = express();
const globalErrorHandler = require("./controllers/errorController");
const User = require("./routes/Crudrouter");

app.use(express.json());

//router
app.use("/user", User);
//global error
app.use(globalErrorHandler);

module.exports = app;
