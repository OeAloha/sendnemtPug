var express = require('express');
var router = express.Router();
const { event } = require("../models")

/* GET users listing. */
router.get('/', async function(req, res) {
	res.render("signIn", { title: 'Login| Kikis Delivery Service' });
});

module.exports = router;
