const mongoose = require('mongoose');

const URI = 'mongodb+srv://progresa:progresa@cluster0.fblwemb.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;