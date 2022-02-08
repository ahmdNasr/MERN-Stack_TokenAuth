const { getAllUsers } = require("../db-access/user-dao");

async function getAllusersService() {
    const usersArray = await getAllUsers()
    return usersArray
}

module.exports = { getAllusersService }