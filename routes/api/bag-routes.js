/* var db = require ('../../models')
var express = require('express')

module.exports = function(app){

app.get('/',function(req,res){
    Bag.findAll({}).then(function(r){
        return res.json(r)
        console.log(r)
    })
})

app.post('/api/bag', function(req,res){
    Bag.create({
        text: req.body.text,
        complete: req.body.complete
        //name:"Big Mac",
       // eaten:"N"
    }).then(function(r) {
        console.log(res.json(r))
    })
}) 

}
 */

 // *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../../models");
var Bag = require("../../models")
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/bags", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.bag.findAll({}).then(function(bag) {
      // We have access to the todos as an argument inside of the callback function
      res.json(bag);
    });
  });

  // POST route for saving a new todo
  app.post("/api/bags", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.bag.create({
      name: req.body.name,
      model: req.body.model,
      quantity: req.body.quantity,
      price: req.body.price,
      color: req.body.color,
      material: req.body.material,
    }).then(function(bag) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(bag);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
   app.delete("/api/bags", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.bag.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(bag) {
      res.json(bag);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/bags", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.bag.update({
      name: req.body.name,
      model: req.body.model,
      quantity: req.body.quantity,
      price: req.body.price,
      color: req.body.color,
      material: req.body.material
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(bag) {
      res.json(bag);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  }); 
};
