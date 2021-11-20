const userService = require("../services/userService");

const userController = {
    async getUser(req, res) {

        let user = await userService.getUser();

        return res.json(user);
    }
}

module.exports = userController;