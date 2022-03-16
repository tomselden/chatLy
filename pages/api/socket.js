import { Server } from 'socket.io';
// https://blog.logrocket.com/implementing-websocket-communication-next-js/
const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on('connection', socket => {
            socket.on('new-message', () => {
                socket.broadcast.emit('new-message-received')
            })

            socket.on('new-group', () => {
                socket.broadcast.emit('new-group-created')
            })

            socket.on('join-group', () => {
                socket.broadcast.emit('new-group-member')
            })
        })
    }
    res.end()
}

export default SocketHandler
