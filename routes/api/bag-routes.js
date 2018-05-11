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
module.exports = function (app) {

  // ---------
  app.get('/api/bags', function (req, res) {
    // This route is used to return ALL the bags - Working
    db.bag.findAll({
     
    }).then(function (bag) {
      // We have access to the bags as an argument inside of the callback function
      res.json(bag);
    });
  });

  // ------------------
  app.get('/api/bags/other/:filter', function (req, res) {
    //This route is used if filter "Other" is picked.  Values that are NOT the hardcoded
    //values are returned.  To be redacted  - Working
    db.bag.findAll({
      where: {
        $and: [
         
          {
            name:
              { $ne: 'Prada' },
          },
          {
            name:
              { $ne: 'Chanel' },
          },
          {
            name:
              { $ne: 'Louis Vuitton' },
          },
          {
            name:
              { $ne: 'Hermes' },
          },
          {
            material:
              { $ne: 'Leather' },
          },
          {
            material:
              { $ne: 'Canvas' },
          },
          {
            material:
              { $ne: 'Nylon' },
          },
          {
            color:
              { $ne: 'Black' },
          },
          {
            material:
              { $ne: 'Blue' },
          },
          {
            material:
              { $ne: 'Brown' },
          },
          {
            material:
              { $ne: 'Red' }
          }
        ]
      }
    }).then(function (bag) {
      res.json(bag);
    });
  });


  // ----------------
  app.get('/api/bags/:filter', function (req, res) {
    // This route returns entries if filter is picked  - Working
    db.bag.findAll({
      where: {
                  
        $or: [
          {
            name:
              { $eq: req.params.filter }
          },
          {
            material:
              { $eq: req.params.filter }
          },
          {
            color:
              { $eq: req.params.filter }
          }
        ]
      }
          }).then(function (bag) {
      res.json(bag);
    });
  });


  //-----------------------
  app.post("/api/bags", function (req, res) {
    // This route is used to add to bags_db.bags when using the sell form.  - Working
    db.bag.create({
      name: req.body.name,
      model: req.body.model,
      quantity: req.body.quantity,
      price: req.body.price,
      color: req.body.color,
      material: req.body.material,
      SKU: req.body.SKU,
      image: req.body.image,
      description: req.body.description,
      sold: req.body.sold,
      bought_by: req.body.bought_by
    }).then(function (bag) {
      // We have access to the new bag as an argument inside of the callback function
      res.json(bag);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });


  


  // // DELETE route for deleting bags. We can get the id of the bag to be deleted from
  // // req.params.id
  // app.delete("/api/bags", function (req, res) {
  //   // We just have to specify which bag we want to destroy with "where"
  //   db.bag.destroy({
  //     where: {
  //       name: req.body.name
  //     }
  //   }).then(function (bag) {
  //     res.json(bag);
  //   });
  // });

  // PUT route for updating bags after purchase. We can get the updated bag data from req.body
  app.put("/api/bags/buy/", function (req, res) {
    db.bag.update({
      quantity: req.body.quantity - 1,
      sold: true,
      bought_by: "Prasangi"
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (bag) {
        res.json(bag);
      })
  });
}
