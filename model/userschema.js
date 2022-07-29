const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})

const User=mongoose.model('USER',userschema)

module.exports = User;