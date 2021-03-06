import React, { useState } from 'react';
import { postRegisterUser } from '../api/api';
import FormFeedback from './shared/FormFeedback';


function RegistrationForm () {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [formFeedback, setFormFeedback] = useState(null)

    const triggerRegister = (event) => {
        // neu laden verhindern
        event.preventDefault()

        // checken ob formular gefüllt ist
        const hasData = firstname.length > 0 && 
                        lastname.length > 0 &&
                        email.length > 0 &&
                        password.length > 0
        if(!hasData) {
            setFormFeedback({
                status: "error",
                message: "Please enter some info my dear!"
            })
            return;
        }

        // api funktion callen
        postRegisterUser({
            firstname,
            lastname,
            email,
            password
        }).then((result) => {
            if(result.err) {
                setFormFeedback({
                    status: "error",
                    message: result.err
                })
                return;
            }
            setFormFeedback({
                status: "success",
                message: "User was successfully registered!"
            })
        }).catch((errorResult) => {
            console.log(errorResult)
        })
    }

    return (
        <div style={{ border: "1px solid gold", paddingBottom: 20, backgroundColor: "tomato" }}>
            <h1 style={{ color: "gold" }}>Create an Account</h1>
            <form>
                <input 
                    type="text"
                    placeholder='Firstname'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} /> <br/>
                <input 
                    type="text"
                    placeholder='Lastname'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} /> <br/>
                <input 
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /> <br/>
                <input 
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /> <br/>

                <button onClick={triggerRegister}>Register</button>
            </form>
  
            <FormFeedback feedback={formFeedback}/>
        </div>
    )
}



export default RegistrationForm;