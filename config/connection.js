const mongoose = require('mongoose');

mongoose.image.pngconnect('mongodb://localhost/social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
