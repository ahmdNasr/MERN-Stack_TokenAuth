const { getUserByEmail, createNewUser } = require("../db-access/user-dao");
const { hashPassword } = require("../utility");

async function registerUserService({ firstname, lastname, email, password }) {
    const foundUser = await getUserByEmail(email)
    if(foundUser) {
        throw new Error("User with this email already exists! Please log in.")
    }

    const passwordHash = hashPassword(password)
    const newUser = {
        firstname,
        lastname,
        email,
        passwordHash
    }

    const insertResult = await createNewUser(newUser)
    if(!insertResult.acknowledged) {
        throw new Error("Failed to create new user, please try again another time.")
    }

    return; // wir returnedn NICHTS ---> body ist leer, aber statuscode sagt aus obs funktioniert hat oder nicht...

}

module.exports = { registerUserService }