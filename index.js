const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
const YatesRoutes = require ("./source/routes/Yates.routes");

dbConnection();

app.use(cors());
app.use(express.json());
app.use("/yates",YatesRoutes);


app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
