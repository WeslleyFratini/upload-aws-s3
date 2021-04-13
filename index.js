require('dotenv/config')
const multer = require('multer')
const express = require('express')
const AWS = require('aws-sdk')
const uuid = require('uuid')

const app = express()
const port = 3000

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

const storage = multer.memoryStorage({
    destination: function(req, file, callback){
        callback(null, '')
    }
})

const upload = multer({storage}).single('image')


app.post('/upload', upload, (req,res) => {

    console.log(req.file);
    res.send({
        message:"Hello"
    })
})

app.listen(port, () => {
    console.log(`Server is up at ${port}`);
})