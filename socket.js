exports = module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('new connection!!!');
        socket.on('chat message', function(obj) {
            io.emit('chat broadcast', obj)
        })
    })
}