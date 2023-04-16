const express = require('express');
const app = express();

const mongoose = require('mongoose');
app.use(express.json())

app.get('/test', (req, res) => {
    res.json({
        message: "get request working!!"
    });
});

// this line suggests only connect to db
mongoose.connect('mongodb://127.0.0.1:27017/testDB')
  .then(() => console.log('Connected to testDB!'));

// using aync await to connect to db 
// await mongoose.connect('mongodb://127.0.0.1/my_database');

// In order to view this db, we have specify what kind of database it is, and what is the type of data it is going to store.
// Schema of the db model
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  });

const UserModel = mongoose.model('UserDatabase', UserSchema);
// this model will be used to interact with our db using our apis


app.post("/register", (req, res) => {
    const {username, email, password} = req.body;
    console.log(username, email, password);
    res.json({
        message: "data received"
    });
});



app.listen(5000, () => {
    console.log("Server running");
});
