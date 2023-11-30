var express = require('express');
var router = express.Router();
const { Package, user, userPackage} = require("../models")





router.get('/', async function(req, res) {
  try {
		
		// Fetch all packages
		const packages = await Package.findAll({
			include: {
				model: userPackage,
				include: [{
					model: user
				}]
			}
		});

// Now format the data for your template
const formattedData = packages.map((pkg) => {
  const senderUserPackage = pkg.userPackages.find(up => !up.isRecipient);
  const receiverUserPackage = pkg.userPackages.find(up => up.isRecipient);

  const sender = senderUserPackage ? senderUserPackage.user : null;
  const receiver = receiverUserPackage ? receiverUserPackage.user : null;

  return {
    id: pkg.id,
    weight: pkg.weight,
    content: pkg.content,
    sender: sender ? `${sender.firstName} ${sender.lastName}` : 'Unknown',
    receiver: receiver ? `${receiver.firstName} ${receiver.lastName}` : 'Unknown'
  };
});

res.render('statistics', { title: 'Statistics', Packages: formattedData });

}
catch (e) {
	console.log(e);
	res.status(500).send("Error occurred");
}
});

module.exports = router;
