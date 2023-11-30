const { user } = require('../models')
const { package } = require('../models')

module.exports = {
	
	/*send new package POST
	get: function(req, res) {
		
		res.json({ PAKKE: "DIN PAKKE ER STÅJLET", such: "HAHA NUB" });


	},
	post: async function(req, res) {
		try {

			//const { sender, receiver } = req.body;
			//const { firstname, lastname, email, phone, address, zipcode, cityname } = sender.data;

			
			address: ssa,
			zipCode: szc,
			city: sc,

			address: rsa,
			zipCode: rzc,
			city: rc
			

		const {sfn, sln, se, spn, ssa, szc, sc,
		rfn, rln, re, rpn, rsa, rzc, rc, 
		w, c} = req.body;


		const sender = await user.findOne({ where: { firstName: sfn, lastName: sln, email: se } }) || await user.create({
			firstName: sfn,
			lastName: sln,
			email: se,
			phone: spn,
		});

		const reciever = await user.findOne({where: {firstName: rfn, lastName: rln, email: re }}) || await user.create({
			firstName: rfn,
			lastName: rln,
			email: re,
			phone: rpn,
		});

		const package = await package.create({
			weight: w,
			content: c
		});

		const address = await address.create({
			
		})

		const userPackage = await userPackage.create({

		});

		res.status(200).json({sender, receiver, package, address, userPackage});
	} catch {
		console.error("Error occured while creating package", error);
		res.status(500).send(error.message)
}
	} 
}
		
		const { sender, receiver } = req.body;
		const { firstname, lastname, email, phone, address, zipcode, cityname } = sender.data;
		const { firstname, lastname, email, phone, address, zipcode, cityname } = reciever.data;
		

		//const { packageId: `${package}`, status: "", address,  } = req.body;
	/*	
		modtager og afsender
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING

		address: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    cityName: DataTypes.STRING

		pakke
		weight: DataTypes.DOUBLE,
    content: DataTypes.STRING

		
		
		
		



	statistic GET listing
	get: function(req, res) {
		
	}*/



}












