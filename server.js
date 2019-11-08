'use strict';

const io = require('socket.io')(3001);


io.on('connection', (socket) => {
  socket.on('file-save', payload => io.emit('connectionMessage', payload));
});


io.on('file-error', (socket) => {
  socket.on('file-error', payload => io.emit('errorMessage', payload));
});

