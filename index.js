const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log('Database is connected');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
});

// schema means is shape of document
// document is the smallest unit of data in MongoDB.
// Collection is a group of documents.
// Database is a group of collections.

/*
    const user = [
        {name : 'user1', age : 20 },
        {name : 'user2', age : 30 },
    ]

*/


const UserSchema = new mongoose.Schema({
    name : String,
    age : Number,
    isMarried: Boolean,
    salary: Number,
    gender: String,
})

const User = mongoose.model('User',UserSchema);


