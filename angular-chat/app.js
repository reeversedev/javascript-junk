let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let mongoose = require('mongoose');
let Chat = require('./models/chat');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://reeversedev:1234@ds119268.mlab.com:19268/mongochat').then(() => console.log('Connected to Database')).catch((err) => console.log(err));

io.on('connection', (socket) => {

    // Log whenever a user connects
    console.log('user connected');

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('message', (message) => {
        console.log('Message Received: ' + message);

        let date = new Date().toUTCString();

        let chat = new Chat({
            message: message,
            updated_at: date
        });
        chat.save((err, result) => {
            console.log('Result: ' + result);
        });
        Chat.find((err, response) => {
            console.log('Response: ' + response);
            io.emit('message', {
                type: 'new-message',
                text: response.message,
                time: response.updated_at
            });
        });
    });
});

// Initialize our websocket server on port 5000
http.listen(3000, () => {
    console.log('started on port 5000');
});