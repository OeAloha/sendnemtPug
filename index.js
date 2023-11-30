const express = require("express");
var path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require("./routes/index");
const PackageRouter = require("./routes/Package");
const signInRouter = require("./routes/signIn");
const statisticsRouter = require("./routes/statistics");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.use(logger);


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static("public")); //future static files (like icon.jpg)
app.use(express.static(path.join(__dirname, 'public')));
// Parse application/json
app.use(express.json());

app.use("/", indexRouter);
app.use("/package", PackageRouter);
app.use("/signIn", signInRouter);
app.use("/statistics", statisticsRouter);

function logger(req, res, next) {
	console.log(req.originalUrl)
	next();
}

app.listen(3000);