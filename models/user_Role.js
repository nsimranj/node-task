const mongoose = require("mongoose");

//declare schema for User_Roles collection
const userRoleSchema = mongoose.Schema({
    role: { type: String, required: true },
    user_id: { type: String, required: true, unique: true },
});

//export model for routes section
module.exports = mongoose.model("User_Role", userRoleSchema);