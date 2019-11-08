const io = require('socket.io-client');

const client = io.connect('http://localhost:3001/school');


client.on('connectionMessage', (payload) => {
    console.log('heard', payload);
});

client.on('errorMessage', (payload) => {
    console.error(payload);
});











