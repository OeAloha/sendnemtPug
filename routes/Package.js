var express = require('express');
var router = express.Router();
const { user } = require('../models')
const { Package } = require('../models')
const { address } = require('../models')
const { userPackage } = require('../models')
const { event } = require('../models')


router.get('/new', async function (req, res) {	
	res.render("newPackage", { title: 'New Package | Kikis Delivery Service' });
});

router.post('/new', async function (req, res) {
	try {

		const { sfn, sln, se, spn, ssa, szc, sc,
			rfn, rln, re, rpn, rsa, rzc, rc,
			w, c } = req.body;


		const sender = await user.findOne({ where: { firstName: sfn, lastName: sln, email: se } }) || await user.create({
			firstName: sfn,
			lastName: sln,
			email: se,
			phone: spn
		});

		const reciever = await user.findOne({ where: { firstName: rfn, lastName: rln, email: re } }) || await user.create({
			firstName: rfn,
			lastName: rln,
			email: re,
			phone: rpn
		});

		const package = await Package.create({
			weight: w,
			content: c
		});

		const senderAddress = await address.create({
			address: ssa,
			zipCode: szc,
			cityName: sc
		})

		const recieverAddress = await address.create({
			address: rsa,
			zipCode: rzc,
			cityName: rc
		})

		const senderUserPackage = await userPackage.create({
			isRecipient: false,
			packageID: package.id,
			userID: sender.id,
			addressID: senderAddress.id
		});

		const recieverUserPackage = await userPackage.create({
			isRecipient: true,
			packageID: package.id,
			userID: reciever.id,
			addressID: recieverAddress.id
		});

		const Event = await event.create({
			packageID: package.id,
			status: "package created",
			dateTime: new Date()
		});

		res.status(200).json({ sender, reciever, package, senderAddress, recieverAddress, senderUserPackage, recieverUserPackage, Event });
	} catch (error) {
		console.error("Error occured while creating package", error);
		res.status(500).send(error.message)
	}
});


router.get('/track', async function(req, res) {
  try {
		const pID = req.query.packageID;
		const packageData = await Package.findOne({ where: { id: pID } });
    const events = await event.findAll({
			where : {packageID : pID},
			order: [['dateTime', 'DESC']] // Sort by dateTime in descending order
		});

    res.render("track", { title: 'Package Tracking | Kikis Delivery Service', events, packageData});
  }
  catch (e) {
    console.log(e);
    res.status(500).send("Error occurred");
  }
});

/*router.post('/track', async function(req, res) {
	await event.create({
		packageID: 1,
		status: "Picked up",
		dateTime: new Date()
	});
});*/

router
	.route("/:id")
	.get((req, res) => {
		console.log(req.user);
		res.send("Get Package ID: " + req.params.id);
	})
	.put((req, res) => {
		res.send("Put Package ID: " + req.params.id);
	})
	.delete((req, res) => {
		res.send("delete Package ID: " + req.params.id);
	});

	const Dummyusers = [{ name: "John" }, { name: "Jane" }];
router.param("id", (req, res, next, id) => {
	//console.log(id);
	req.user = Dummyusers[id];
	next();
});


	module.exports = router;
