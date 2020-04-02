const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

const app = express();
app.use(cors());
app.use(express.json());

// DB 연결
mongoose.connect(uri, 
  { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true 
  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});