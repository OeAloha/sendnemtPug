var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
	res.render("index", { title: 'Kikis Delivery Service' });
});

router.post('/', async function (req, res) {	
	pID = req.body.pID;
  res.redirect(`/package/track?packageID=${encodeURIComponent(pID)}`);
});

module.exports = router;
