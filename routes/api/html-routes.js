
  // *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/views/index.html"));
      });
    app.get("/collections", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/views/collections.html"));
      });
    app.get("/popular", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/views/popular.html"));
      })
    app.get("/sell", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/views/newbag.html"));
      })
    app.get("/users", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/views/newuser.html"));
      })
    app.get("/buy", function(req, res) {
        res.sendFile(path.join(__dirname, "../../public/views/bagdetail.html"));
      })
};