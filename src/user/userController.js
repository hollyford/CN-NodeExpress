const User = require("./userModel")

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ message: "Successfully added user", newUser });
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Unsucessful, please check again"})
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
        User.findByIdAndUpdate(req.body._id, req.body);
        updatedUser = await User.findById(req.body._id);
        res.status(200).send({message: "Successfully updated user", updatedUser});
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        deleted = await User.findByIdAndDelete(req.body._id)
        res.status(200).send({message: "Successfully deleted user", deleted});
    } catch (error) {
        console.log(error)
    }
}
