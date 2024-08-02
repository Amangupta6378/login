const express = require('express');
const app = express();
const cors = require('cors');
//middleware
app.use(express.json());
app.use(cors());

require('./config/Database').connect();

//Routes
// const route = require('./routes/notice')
// app.use('/api/v1', route);

require('dotenv').config()
const PORT = process.env.PORT || 4000;


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} port.`)
})
app.get("/aman", (req, res)=>{
    res.send(`Server is running on ${PORT} port.`)
})