const db = require("../../database/models");
const userModal = db.User;


const userService = {

    async getUsers() {
        try {
            let Users = await userModal.findAll();
            return Users;

        } catch (error) {
            console.log(error);
            return undefined;
        }

    }

}
module.exports = userService;