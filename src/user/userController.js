const User = require("./userModel")

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ message: "Successfully added user", newUser });
    } catch (error) {
        console.log(error)
    }
}

exports.listUsers = async (req, res) => {
    try {
        users = await User.find({});
        res.status(200).send({message: "Successfully returned users", users});
    }catch (error) {
        console.log(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        user = await User.findOneAndUpdate(req.body, {upsert: true})
        res.status(200).send({message: "Successfully updated user", user});
    } catch (error) {
        console.log(error)
    }
}
