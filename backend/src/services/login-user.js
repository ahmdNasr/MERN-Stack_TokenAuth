const jwt = require('jsonwebtoken');
const { getUserByEmail } = require("../db-access/user-dao");
const { hashPassword } = require("../utility");

const generateToken = (user) => {
    const NOW = Math.ceil(Date.now() / 1000)
    const ONE_DAY = 24 * 60 * 60
    const NOW_IN_ONE_DAY = NOW + ONE_DAY
    
    const token = jwt.sign({
        sub: user._id,      // wer ist es
        iat: NOW, // dividieren durch 1000 um von millisekunden auf sekunden zu kommen...
        exp: NOW_IN_ONE_DAY, // wann er abläuft
        type: "access_token",
    }, process.env.JWT_SECRET)

    return token
}

async function loginUserService({ email, password }) {
    const foundUser = await getUserByEmail(email)
    if(!foundUser) {
        throw new Error("User not found.")
    }

    const passwordHash = hashPassword(password)
    const passwordIsCorrect = foundUser.passwordHash === passwordHash
    if(!passwordIsCorrect) {
        throw new Error("Email and password do not match.")
    }

    const token = generateToken(foundUser)
    return token
}

module.exports = { loginUserService }