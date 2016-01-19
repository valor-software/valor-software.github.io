var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
module.exports = function (app) {
  var adminEmail = app.get('adminEmail');
  app.post('/formSendResume/data', function (req, res) {
    var mailObj = req.body;
    transporter.sendMail({
      from: mailObj.email,
      to: adminEmail,
      subject: 'Resume from' + mailObj.name,
      html: mailObj.name + '<br />' + mailObj.email + '<br />' +
      mailObj.job + '<br />' + mailObj.city + '<br />' + mailObj.message + '<br />'
    }, function (err, data) {
      res.json({success: !err, msg: [], data: true, error: err});
    });
  });
};