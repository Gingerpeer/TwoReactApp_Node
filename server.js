const express = require('express');
const path = require('path');
const vhost = require('vhost')
const app = express();
const appUpload = express();
const port = process.env.PORT || 5000
const port2 = process.env.PORT2 || 3000

app.listen(port,()=>console.log(`Listening on port ${port}`))
appUpload.listen(port2,()=>console.log(`Listening on port ${port2}`))

app.use(express.static(path.join(__dirname, 'client/build_normal')))
appUpload.use(express.static(path.join(__dirname, 'client/build_upload')))


app.use('/',(req,res,next)=>{
  return res.sendFile(path.resolve(__dirname, 'client/build_normal', 'index.html'))
})
appUpload.use('/upload',(req,res,next)=>{
  return res.sendFile(path.resolve(__dirname, 'client/build_upload', 'index.html'))
})

