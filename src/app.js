const express = require("express");
const app = express();
const usersRouter = require("./users/users.router");

app.use(express.json());

module.exports = app;

app.get("/", (req, res) => {
    res.status(200).json({ message: "OK!" });
});

app.use("/users", usersRouter);

app.listen(9000, () => {
    console.log("Server started at localhost:9000");
});
