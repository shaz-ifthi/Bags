// Requiring our models
var db = require("../../models");
var User = require("../../models")
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the userss
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.user.findAll({}).then(function(user) {
      // We have access to the users as an argument inside of the callback function
      res.json(user);
    });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      credits: req.body.credits,
      seller: req.body.seller,
      
    }).then(function(user) {
      // We have access to the new user as an argument inside of the callback function
      //res.json(user);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting users. We can get the id of the user to be deleted from
  // req.params.id
   app.delete("/api/users", function(req, res) {
    // We just have to specify which user we want to destroy with "where"
    db.user.destroy({
      where: {
        name: req.body.name
      }
    }).then(function(user) {
      res.json(user);
    });

  });

  // PUT route for updating users. We can get the updated user data from req.body
  app.put("/api/users", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.user.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        credits: req.body.credits,
        seller: req.body.seller
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  }); 
};
