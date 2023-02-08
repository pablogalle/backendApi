const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./databse');
const {json} = require('express');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(cors().header("Access-Control-Allow-Origin", "http://localhost:4200"));
app.use(express.json());

// Routes
app.use('/api/series', require('./routes/serie.route'));
app.use('/',(req, res) => res.send('API in /api/series'));

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})