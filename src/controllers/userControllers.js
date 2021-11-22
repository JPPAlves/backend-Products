const userService = require("../services/userService");

const userController = {
    async getUsers(req, res) {

        let user = await userService.getUsers();

        return res.json(user);
    }
}

module.exports = userController;