const req = require('express/lib/request');
const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();

// Create a post
router.post("/", async (req, res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save(); 
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err);
    }
});


// Update a post (here we get id of post to update)
router.put("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);

        // Check if it is the users post, only then he can update it
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("Post Updated!");
        } else{
            res.status(403).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// Delete a post (here we get id of post to delete)
router.delete("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);

        // Check if it is the users post, only then he can delete it
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post Deleted!");
        } else{
            res.status(403).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// Like or dislike a post (here we get id of post to like)
router.put("/:id/like", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);

        // If post not liked
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes:req.body.userId} });
            res.status(200).json("Post liked!");
        } else{
            await post.updateOne({ $pull:{likes:req.body.userId} });
            res.status(200).json("Post disliked!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// Get a post (here we get id of post to retrieve)
router.get("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Get timeline posts
router.get("/timeline/all", async (req, res)=>{
    try {
        // Get all your posts
        const currentUser = await User.findById(req.body.userId); 
        const userPosts = await Post.find({userId: currentUser._id});   

        // Get all your friends posts whom you are following
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId)=>{
                return Post.find({userId: friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;