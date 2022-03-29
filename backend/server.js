const app = require('express')()
const cors = require('cors')
const {Server} = require('socket.io')
const http = require('http').createServer(app)
const io = new Server(http,{
    cors:{
        origin:'*'
    }
})


io.on('connection',(socket)=>{
    socket.on("chat",(payload)=>{
        console.log(payload);
        socket.broadcast.emit("chat",payload)

    })

    socket.on('disconnet',()=>{
        console.log("Clint is now disconneted");
    })
})


http.listen(5000,()=>{
    console.log(`Server is running on port 5000...`);
})
