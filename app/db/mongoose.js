const mongoose = require('mongoose');
const User = require('./models/user');
const { database } = require('../config') ;

mongoose.connect(database);



async function main() {
    /*const user = await User.find({});
    console.log(user)*/

    const user = new User({
        username: 'Sloniu',
        password: '123'
    });
    try {
        await user.save();
    } catch (e) {
        console.log('Ops....');
        for (const key in e.errors) {
            console.log(e.errors[key].message);
        }
    }
}
main();