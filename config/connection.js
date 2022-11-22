const mongoose = require('mongoose');
//connecting to mongoose and having the connection run in the terminal is important 
mongoose.connect('mongodb://127.0.0.1:27017/social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;