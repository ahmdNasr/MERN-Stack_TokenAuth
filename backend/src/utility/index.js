const crypto = require("crypto")

const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password, 'utf8').digest("hex")
}


module.exports = {
    hashPassword
}