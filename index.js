// Main starting point of the application
const express = require('express');
const http = require('http');
// used to parse incoming requests to JSON
const bodyParser = require('body-parser');
// morgan is a logging framework
const morgan = require('morgan');
// const app = express();
// const router = require('./router');
// const mongoose = require('mongoose');
// const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
// morgan and bodyParser are middlware; everything will flow through them
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
