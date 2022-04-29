var express = require('express');
var router = express.Router();

var fs = require('fs');

var Cart = require('../models/cart');
const Paymentform = require('../public/db/conn');
const Contactform = require('../public/db/conn');
var products = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

router.get('/', function (req, res, next) {
  res.render('index', 
  { 
    title: 'NodeJS Shopping Cart',
    products: products
  }
  );
});

router.get('/add/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var product = products.filter(function(item) {
    return item.id == productId;
  });
  cart.add(product[0], productId);
  req.session.cart = cart;
  res.redirect('/');
});

router.get('/cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('cart', {
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('cart', {
    title: 'Shopping Cart',
    products: cart.getItems(),
    totalPrice: cart.totalPrice
  });
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.remove(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/payment.hbs', (req,res)=>{
  res.render("payment.hbs");
})

router.get('/contact.hbs', (req,res)=>{
  res.render("contact.hbs");
})

router.get('/feedback.hbs', (req,res)=>{
  res.render("feedback.hbs");
})

router.get("/thankyou.hbs", (req,res)=>{
  res.render("thankyou.hbs");
})

router.post("/contact.hbs", async(req,res)=>{
  try {
      const contactusFormDetails = new Contactform(req.body);
      await contactusFormDetails.save();
      res.status(200).render("feedback.hbs");
  } catch(error) {
      res.status(404).render("feedback.hbs");
  }
})

/* Paymentform */
router.post("/payment.hbs", async(req,res)=>{
  try {
      const paymentFormDetails = new Paymentform(req.body);
      await paymentFormDetails.save();
      res.status(200).render("thankyou.hbs");
  } catch(error) {
      res.status(404).send(error);
  }
})

module.exports = router;
