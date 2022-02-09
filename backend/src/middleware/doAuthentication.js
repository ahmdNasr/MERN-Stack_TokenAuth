const jwt = require("jsonwebtoken")


function doAuthentication(req, res, next) {
    const token = req.headers.token

    try {
        const verifiedTokenInfo = jwt.verify(token, process.env.JWT_SECRET)
        // check token type ...
        req.tokenInfo = verifiedTokenInfo
        next()
    } catch (err) {
        // wirft einen fehler, wenn die signatur falsch ist (invalider token)
        // ODER wenn der token schon expired!!
        console.log(err)
        res.status(401).send({ err: "Your token is invalid or expired!" })
    }    
}

module.exports = { doAuthentication }