// const express = require("express")
// const http = require("http")
// const {Server} = require("socket.io")
// const path = require('path')
// const app = express();
// const PORT = 5000;
// const server = http.createServer(app);
// const io = new Server(server);
// app.use(express.static(path.resolve("./public")))

// app.get('/', (req, res) => {
//     res.sendFile("/public/index.html")
//   });


// io.on('connection', (socket) => {
//     socket.on("user-msg",(message)=>{
//        io.emit("message",message)
//     })
    
//   });
  
// server.listen(PORT,()=>{
//     console.log("Server Started")
// })


const express = require('express')
const multer  = require('multer')
const path = require('path')
const PORT = 8000;
const app = express();

app.use(express.static(path.resolve("./public")))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({storage})

app.get('/',upload.single("uploadImage"), (req, res) => {
    res.sendFile("/public/index.html")
  });


app.listen(PORT,()=>{
    console.log("Server Started at 8000")
});