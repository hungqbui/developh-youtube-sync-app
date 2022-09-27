import express from 'express'
const app = express()

import http from 'http'
const server = http.createServer(app)

import { Server, Socket } from 'socket.io'
const io = new Server(server)

import path from 'path'
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, 'src')))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index'))


io.on('connection', (socket)=> {
  console.log('User has connected')
  socket.on('submit-link', (data)=> {
    io.emit('broadcasted-link', data.message)
  })
  socket.on('update',()=> {
    io.emit('update-player')
  })
  socket.on('play-clicked',()=> {
    io.emit('play')
  })
  socket.on('pause-clicked',()=> {
    io.emit('pause')
  })
  socket.on('change-time-stamp', (timestamp)=> {
    io.emit('go-to-time-stamp', timestamp.message)
  })
  socket.on('mouse-up', ()=>{
    io.emit('bar-mouse-up')
  })
})



server.listen(5500, ()=> {
  console.log('Listening on 5500')
})





