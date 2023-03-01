const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        //validate: checkName

    },
    password: {
        type: String,
        required: true,
        minLength: 3
    }
});

// setter
userSchema.path('username').set((value) => value.toLowerCase());

const User = mongoose.model('User', userSchema);

module.exports = User;