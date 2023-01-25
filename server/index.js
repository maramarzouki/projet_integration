const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan =require('morgan')
const userRoutes=require('./routes/userRoutes')
const projectRoutes=require('./routes/projectRoutes')
const taskRoutes=require('./routes/taskRoutes')
const adminRoutes=require('./routes/adminRoutes')
const blogRoutes=require('./routes/blogRoutes')
const toDoListRoutes=require('./routes/toDoListRoutes')

const app= express();
mongoose.connect('mongodb://localhost:27017/productivityApp');
const port = process.env.PORT || 3001;
app.listen(port,console.log(`Listening on ${port}...`));

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/',userRoutes)
app.use('/',projectRoutes)
app.use('/',taskRoutes)
app.use('/',adminRoutes)
app.use('/',blogRoutes)
app.use('/',toDoListRoutes)