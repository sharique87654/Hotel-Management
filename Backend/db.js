const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Panther:panther12345@panther.ziowa4z.mongodb.net/Hotel|Management')

const Userschema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String
})

const AdminSchema = new mongoose.Schema({
    adminName : String,
    password :String,
})

const RoomsData = new mongoose.Schema({
    roomName : String,
    description : String,
    price : String,
    roomType : String,
    numberofbed : String,

})

const signupdb = mongoose.model('Clients' , Userschema)
const admindb = mongoose.model('Admin' ,  AdminSchema)
const roomdata = mongoose.model('Rooms' ,  RoomsData)

module.exports = {
    signupdb,
    admindb,
    roomdata
}