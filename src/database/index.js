const mongoose = require('mongoose');

const mongodb_server = process.env.MONGODB_SERVER || 'localhost';
const mongodb_user = process.env.MONGODB_USER || 'user';
const mongodb_password = process.env.MONGODB_PASS || 'pass';
const mongodb_db = process.env.MONGODB_DB || 'test';

const uri = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_server}/${mongodb_db}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
