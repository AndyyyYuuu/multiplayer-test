
//import io from 'socket.io-client';
const socket = io();
addEventListener("keydown", () => {
	socket.emit('keyPressed');
});

socket.on('updateText', (message) => {
  document.getElementById('display-text').textContent = message;
});

