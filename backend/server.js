// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/auth');
// const documentRoutes = require('./routes/documents');
// const cors = require('cors');
// const { Server } = require('socket.io');
// const http = require('http');

// dotenv.config();
// connectDB();

// const app = express();
// const server = http.createServer(app);

// // Configure CORS for HTTP requests
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
// }));

// // Socket.io setup for real-time collaboration
// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:3000', 
//         methods: ['GET', 'POST']
//     }
// });

// // Middleware and routes
// app.use(express.json());
// app.use('/api/auth', authRoutes);
// app.use('/api/documents', documentRoutes);

// //connection happens when a io called made from socket.io client
// io.on('connection', (socket) => {
//     console.log('New WebSocket connection');

//     //user on documentdetails - useuseffect
//     socket.on('joinDocument', (documentId) => {
//         socket.join(documentId);
//         console.log(`User joined document ${documentId}`);
//     });
//     // user when changes the input feild values
//     socket.on('documentUpdate', ({ documentId, title, content }) => {
//         socket.to(documentId).emit('receiveUpdate', { title, content });
//     });

//     //this is not used by the frontend
//     socket.on('sendMessage', ({ documentId, message }) => {
//         socket.to(documentId).emit('receiveMessage', message);
//     });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/documents');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const multer = require('multer');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const upload = multer({ dest: 'uploads/' }); // File upload setup

// Configure CORS for HTTP requests
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Socket.IO setup for real-time collaboration
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// Middleware and routes
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);

// File upload route
app.post('/api/documents/upload', upload.single('file'), (req, res) => {
    const { originalname, filename, path } = req.file;
    res.status(201).json({ originalname, filename, path });
});

// WebSocket events
io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    socket.on('joinDocument', (documentId) => {
        if (!documentId) return console.error('Invalid document ID');
        socket.join(documentId);
        console.log(`User joined document ${documentId}`);
    });

    socket.on('documentUpdate', ({ documentId, title, content }) => {
        if (!documentId || !title || !content) {
            console.error('Invalid document update data');
            return;
        }
        socket.to(documentId).emit('receiveUpdate', { title, content });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

