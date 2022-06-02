const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


// Register User
router.post("/register", async (req, res)=>{
    try{
        // Encrypt password
        const salt = await bcrypt.genSalt(10);   
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});


// Login User
router.post("/login", async (req, res)=>{
    try{
        // Find user with email
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User Not Found!");    // If user not found send response

        // Decrypt and check password
        const originalPassword = await bcrypt.compare(req.body.password, user.password);
        !originalPassword && res.status(400).json("Incorrect Password!");   // Passwords dont match

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;