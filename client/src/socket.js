import io from 'socket.io-client';
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
const sockets = io('https://socket.invitary.com');
// const sockets = io('http://localhost:3001');
export default sockets;
