const { getAllUsers } = require("../db-access/user-dao");

async function getAllUsersService() {
    const usersArray = await getAllUsers()
    return usersArray
}

module.exports = { getAllUsersService }