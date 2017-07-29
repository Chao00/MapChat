exports = module.exports = function(io) {

    io.on('connection', function(socket) {
        console.log('new connection.')
        socket.on('disconnect', function() {
            console.log('discounncted');
        })
        socket.on('chat', function(txt) {
            io.emit('chat broadcast', txt);
            console.log(txt);
        })
    })
}