exports = module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('new connection!!!');
        socket.on('chat message', function(m) {
            console.log('message: ' +  m)
            io.emit('chat broadcast', m)
        })
    })
}