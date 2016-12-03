// Dependencies
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var server = app.listen(port)
var io = require('socket.io').listen(server)

var communicator = {
  init: function init() {
    console.log('socket initialization...')
    io.on('connection', function (socket) {
      console.log(socket.id)
      socket.emit('init', {
        state: 'x'
      })
    })
  },
  broadcast: function broadcast(screen, data) {
    console.log(screen)
    io.emit('exoCut', {
      screen: screen,
      state: data
    });
  }
}

module.exports = communicator
