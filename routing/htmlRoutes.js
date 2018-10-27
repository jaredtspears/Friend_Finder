
var path = require('path');

module.exports= function(app){



//getting route for survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/survey.html"));
  });

//getting route for home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

};