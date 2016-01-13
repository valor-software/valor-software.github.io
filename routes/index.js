module.exports = function (app) {
  require('./big_resume.js')(app);
  require('./short_resume.js')(app);
};
