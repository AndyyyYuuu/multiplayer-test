
//const express = require('express');
//const http = require('http');
//const socketIO = require('socket.io');
import express from "express"
import http from "http"
import socketIO from "socket.io-client"

const app = express();
const server = http.createServer(app);
const io = new socketIO(server);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  socket.on('keyPressed', () => {
    io.emit('updateMessage', 'Hello from everyone!');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});