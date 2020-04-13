const security = require('./middleware/security');

module.exports = (app) => {
  app.use('/users', require('./routes/users'));
  app.use(security);
  app.use('/project', require('./routes/project'));
}
