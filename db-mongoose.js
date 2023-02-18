const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/prioritize');

//model

const User = mongoose.model('user'.{
    username: {
        type: String
    },
    password: {
        type: String
    }
});

User.find({},(err, docs) => {
    console.log(docs)
});