const usersDB = [
    {
        id: 1,
        firstName: "Sahid",
        lastName: "Kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22,
    },
];
let baseId = 1;

const findAllUsers = async () => await usersDB;

const findUserById = async (id) => {
    const filteredUser = await usersDB.find((user) => user.id === id);
    return filteredUser;
};

const createNewUser = async (user) => {
    const newUser = {
        id: ++baseId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        age: user.age,
    };

    await usersDB.push(newUser);
    return newUser;
};

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
};
