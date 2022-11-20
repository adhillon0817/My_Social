const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
