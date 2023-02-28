// @ todo
// qustom name validation
/*const forArr = ['sloniu', 'prioritize','loson'];
const checkName = value => {
    if (value === forArr.prototype.toString()) {
        throw new Error(' Name is forbidden');
    }
    console.log(forArr);*/


//model
import mongoose from "mongoose";

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
//userSchema.path('username').set((value) => value.toLowerCase());

const User = mongoose.model('user', userSchema);

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