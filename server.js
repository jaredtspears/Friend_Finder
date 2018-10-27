
// //script for the radio buttons corresponding to semantic
// $('.ui.radio.checkbox')
//   .checkbox()
// ;
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// directs server to the below routes found in routing folder
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// app listener here at the bottom
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });