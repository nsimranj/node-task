const mongoose = require("mongoose");

//declare schema for users collection
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique:true},
    address: { type: String, required: true },
    dateOfReg: { type: Date, default: Date.now ,required: true },
});

//export model for routes section
module.exports = mongoose.model("User", userSchema);