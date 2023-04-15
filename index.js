const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.get('/test', (req, res) => {
    res.json({
        message: "get request working!!"
    });
});

app.listen(5000, () => {
    console.log("Server running");
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

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