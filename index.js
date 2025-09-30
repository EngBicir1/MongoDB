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


// const UserSchema = new mongoose.Schema({
//     name : String,
//     age : Number,
//     isMarried: Boolean,
//     salary: Number,
//     gender: String,
// })

// const User = mongoose.model('User',UserSchema);

// async function fetchInformation(){
//     const users = await User.find({isMarried: false}).countDocuments();
//     console.log(users);
// }

// fetchInformation();



// async function storeInformation(){
//     const user = new User({
//     name : 'EngBicir',
//     age : 24,
//     isMarried : false,
//     salary : 80000,
//     gender : 'Male',
// });
//     await user.save();
//     console.log(user);

// }

// storeInformation();



// comparison operator

// eq equal
// ne not equal
// gt creator then
// gte creator then equal
// lt lss then
// lte lss then equal
// in 
// nin not in


// const UserSchema = new mongoose.Schema({
//     name : String,
//     age : Number,
//     isMarried: Boolean,
//     salary: Number,
//     gender: String,
// })

// const User = mongoose.model('User',UserSchema);

// async function fetchInformation(){
//     const users = await User.find({salary: {$nin: [25000,40000,45000 ]}});
//     console.log(users);
// }

// fetchInformation();





// logical oparators

// or 
// and

const UserSchema = new mongoose.Schema({
    name : String,
    age : Number,
    isMarried: Boolean,
    salary: Number,
    gender: String,
})

const User = mongoose.model('User',UserSchema);

// async function db(){

//     const users = await User.find().or([ 
//         {age: {$in: [30,40,60]}}
//     ]).select('name').sort('-name');
//     console.log(users);
    
// }

// db();

// update Data in mongooos


// findByIdAndUpdate

// async function Updateuser(){

//     const user = await User.findByIdAndUpdate('68d8fe7bfe681bf45274fbe6',
//         {age: 45 , isMarried: false},
//         {new: true,runValidators: true}
//     );
    
// }

// Delete ID
async function Updateuser(){

    await User.findByIdAndDelete('6027d22c7dd46d17c04bdf90');
    
}

Updateuser();