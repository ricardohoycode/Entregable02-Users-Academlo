const usersControllers = require("./users.controllers");

const findAllUsers = (req, res) => {
    usersControllers
        .findAllUsers()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const createNewUser = (req, res) => {
    usersControllers
        .createNewUser(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const findUserById = (req, res) => {
    const id = Number(req.params.id);
    usersControllers
        .findUserById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: "Invalid ID" });
            }
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
};

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
};
