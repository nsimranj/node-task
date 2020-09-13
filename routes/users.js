const express = require("express");
const router = express.Router();
const User = require("../models/user");
const User_Role = require("../models/user_Role");

//route handler
router.post('/register', (req, res, next) => {
    //get the user details from request body
    const user = new User(req.body);
    user.save()
        .then(createdUser => {
            //after registering user, check if any role is created by querying
            User_Role.find()
                     .then(userRoles=>{
                        const userRole = new User_Role({
                            user_id: createdUser._id,
                            //if a role document exist then assign user as role
                            role: userRoles.length > 0 ? 'user' : 'admin' 
                        });
                        userRole.save()
                                .then(userRol=>{
                                    //construct response
                                    let {_id,__v,...resp} = createdUser._doc;
                                    resp.role = userRol.role;
                                    res.status(200).json(resp);
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(400).json('User Role Creation Failed :(');
                                });
                    })
                     .catch(err => {
                        console.log(err);
                        res.status(400).json('Retrieving roles Failed :(');
                    });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Registering Users Failed :(');
        });
});

module.exports = router;
