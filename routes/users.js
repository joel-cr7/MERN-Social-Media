const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Update user (The request body contains all fields to be updated and their values)
router.put("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);   
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            // Update everything that is present in the request body
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account Updated!");
        } catch(err){
            return res.status(500).json(err);
        }
    } else{
        return res.status(403).json("You can update only your account!");
    }
});


// Delete user
router.delete("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            // Delete user
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account Deleted!");
        } catch(err){
            return res.status(500).json(err);
        }
    } else{
        return res.status(403).json("You can delete only your account!");
    }
});


// Get a user
router.get("/:id", async (req, res)=>{
    try{
        // Get a user
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(err){
        return res.status(500).json(err);
    }    
});


// Follow a user
router.put("/:id/follow", async (req, res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);   // id of the following person
            const currentUser = await User.findById(req.body.userId);   // Your id

            // You can only follow a person you are not following
            if(!user.followers.includes(req.body.userId)){
                await currentUser.updateOne({ $push: {following:req.params.id} });
                await user.updateOne( { $push: {followers:req.body.userId} });
                res.status(200).json("User followed");
            } else {
                res.status(403).json("You already follow this user!");
            }
        } catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Can't follow yourself!");
    }
});


// Unfollow a user
router.put("/:id/unfollow", async (req, res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);   // id of the person to unfollow
            const currentUser = await User.findById(req.body.userId);   // Your id

            // You can only unfollow a person you are following
            if(user.followers.includes(req.body.userId)){
                await currentUser.updateOne({ $pull: {following:req.params.id} });
                await user.updateOne( { $pull: {followers:req.body.userId} });
                res.status(200).json("User unfollowed");
            } else {
                res.status(403).json("You already unfollow this user!");
            }
        } catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Can't unfollow yourself!");
    }
});


module.exports = router;