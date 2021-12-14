const bcrypt = require("bcrypt");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Unsuccessful, please try again" })
    }
}

exports.verifyHash = async (req, res, next) => {
    try {
        const find = await User.findOne({ username: req.body.username, email: req.body.email });
        console.log(find);
        if (await bcrypt.compare(req.body.password, find.password)) {
            res.status(200).send({ message: "Successfully validated password - you're now logged in" })
            next();
        } else {
            res.status(500).send({ message: "Unsuccessful, please try again" })
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Unsuccessful, please try again" })
    }
}
