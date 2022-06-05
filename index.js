const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const { json } = require('express/lib/response');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const app = express();
dotenv.config();


//connect to mongodb
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log('Connected to MongoDB!');
});


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


app.listen(8800, ()=>console.log('Backend server is running!'));