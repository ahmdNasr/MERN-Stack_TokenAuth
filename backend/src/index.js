const express = require("express")
const cors = require("cors") // damit wir von localhost:3000 auf localhost:9000 anfragen verschicken könnnen
const dotenv = require("dotenv")

const { loginUserService } = require("./services/login-user")
const { registerUserService } = require("./services/register-user")

dotenv.config()

const app = express()
// configure app
app.use(cors())
app.use(express.json()) // parse body as json!!!! (für POST routen)

app.get("/api/users", (req, res) => {

})

app.post("/api/users/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    loginUserService({ email, password })
    .then((token) => {
        res.send({ token })
    })
    .catch((err) => {
        console.log("err on login:", err)
        res.status(400).send({ err: err.message }) // 400 heißt bad request (also irgendwas stimmt nicht and den infos vom client)
    })
})

app.post("/api/users/register", (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    registerUserService({ firstname, lastname, email, password })
    .then(() => {
        res.status(201).send({}) // status 201 heißt "Created" -- in diesem context heißt das ===> erfolgreich registriert
    })
    .catch((err) => {
        console.log("err on login:", err)
        res.status(400).send({ err: err.message }) // 400 heißt bad request (also irgendwas stimmt nicht and den infos vom client)
    })
})

app.use((_, res) => {
    res.status(404).send({ err: "404 not found"}) // sende nur statuscode 404 und beende
})


app.listen(9000, () => console.log("listening on port 9000"))