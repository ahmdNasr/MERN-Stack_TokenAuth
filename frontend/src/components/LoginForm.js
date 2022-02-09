import React, { useState } from 'react';
import { postLoginUser } from '../api/api';
import FormFeedback from './shared/FormFeedback';

function LoginForm (props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [formFeedback, setFormFeedback] = useState(null)    

    const triggerLogin = (event) => {
        event.preventDefault()
        // check for data
        const hasData = email.length > 0 && password.length > 0
        if(!hasData) {
            setFormFeedback({
                status: "error",
                message: "Please fill in your Login information!"
            })
            return;
        }
        // trigger the login
        postLoginUser({ email, password })
        .then(({ err, token }) => {
            if(err) {
                setFormFeedback({
                    status: "error",
                    message: err
                })
                return;
            }
            // login erfgolreich --> token speichern (in der App.js)
            props.saveToken(token)
            // reset state...
            setEmail("")
            setPassword("")
            setFormFeedback(null)
        })
    }

    return (
        <div style={{ border: "1px solid gold", paddingBottom: 20, backgroundColor: "gold" }}>
            <h1 style={{ color: "darkred" }}>Login</h1>
            <form>
                <input 
                    type="text"
                    placeholder='Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} /> <br/>
                <input 
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} /> <br/>
                <button onClick={triggerLogin}>Login</button>
            </form>

            <FormFeedback feedback={formFeedback}/>
        </div>
    )
}


export default LoginForm;