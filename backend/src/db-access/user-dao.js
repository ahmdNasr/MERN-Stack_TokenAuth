const { _getDb } = require("./_getDb")

async function getAllUsers() {
    const db = await _getDb()
    
    const userArray = await db.collection('users')
    .find() // no find query because want all
    .toArray() // turn FindCursor into array to get data

    return userArray
}

async function getUserByEmail (email) {
    const db = await _getDb()
    const foundUser = await db.collection('users').findOne({ email })
    return foundUser
}

async function userNameOrEmailExists(email) {
    const db = await _getDb()
    const user = await db.collection('users').findOne({ 
        $or: [
            { email:  email },
        ]
    })
    return user
}

async function createNewUser (user) {
    const db = await _getDb()
    const createdUser = await db.collection('users').insertOne(user)
    return createdUser
}

module.exports = {
    getAllUsers,
    getUserByEmail,
    userNameOrEmailExists,
    createNewUser
}