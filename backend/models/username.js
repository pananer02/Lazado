const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usernameSchema = new Schema({
    name:{
        type: String
    },
    ID:{
        type: String
    },
    password:{
        type: String
    }
},{
    collection:'usernames'
})

module.exports = mongoose.model('username',usernameSchema);