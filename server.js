const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const { env } = require("process");
const app = express();
const url = "mongodb://localhost/management";
const taskRoutes = require("./routes/taskroute");
const cors = require("cors");
//Middleware
app.use((request, response, next) => {
  console.log("path" + request.path + "method" + request.method);
  next();
});
app.use(express.json());
app.use(cors());
mongoose
  .connect(url)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Db connected succesfully and listening to " + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/", taskRoutes);
