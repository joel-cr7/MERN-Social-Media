const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const { json } = require('express/lib/response');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();


//connect to mongodb
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log('Connected to MongoDB!');
});


// if we get '/images' endpoint and any image name the show that image
app.use("/images", express.static(path.join(__dirname, "public/images")));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


// uploading an image file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");   //file storage destination
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);    //filename
    }
});

const upload = multer({storage}) ;
app.post("/api/upload", upload.single("file"), (req, res)=>{
    try {
        return res.status(200).json("File uploaded successfully");
    } catch (err) {
        console.log(err);
    }
});


app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


app.listen(8800, ()=>console.log('Backend server is running!'));