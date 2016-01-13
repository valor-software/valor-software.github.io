module.exports = function(app) {
  require('./config.express.js')(app);
  require('./config.js')(app);
};
