// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    console.log("dentro de la primera ruta en html routes");
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("dentro de la segunda ruta en html routes");
  });

  console.log("dentro de html routes");
};