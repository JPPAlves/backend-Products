const db = require("../../database/models");
const userModal = db.User;


const userService = {

    async getUser() {
        try {
            let user = await userModal.findAll({
            });
            return user;

        } catch (error) {
            console.log(error);
            return undefined;
        }

    }

}
module.exports = userService;