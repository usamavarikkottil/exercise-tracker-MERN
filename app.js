const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri, {useNewUrlParser: true,useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {console.log("MongoDB connection success :D ")});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises" , exercisesRouter);
app.use("/users" , usersRouter);

app.listen(port, () => console.log(`Server is listening on ${port} `) );