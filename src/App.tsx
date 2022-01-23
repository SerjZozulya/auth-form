import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Input email')
    const [passError, setPassError] = useState('Input pass')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passError) {
            setFormValid(false)
        }

        else {
            setFormValid(true)
        }
    })

    const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            default:
                break
        }
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is not correct')

        }
        else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 24) {
            setPassError('The password must be between 3 and 24 characters')
            if(!e.target.value) {
                setPassError('Input pass')
            }
        }
        else
            setPassError('')
    }

    return (
        <div className="App">
            <h1>Вход</h1>
            <form className={"auth-form"}>
                {(emailDirty && emailError) && <div className={"error"}>{emailError}</div>}
                <input onBlur={e => blurHandler(e)}
                       onChange={e => emailHandler(e)}
                       value={email}
                       name={"email"}
                       type={"text"}
                       placeholder={"enter your email"}/>
                {(passwordDirty && passError) && <div className={"error"}>{passError}</div>}
                <input onBlur={e => blurHandler(e)}
                       onChange={e => passwordHandler(e)}
                       value={password}
                       name={"password"}
                       type={"password"}
                       placeholder={"enter your password"}/>
                <button disabled={!formValid} type={"submit"}>Sign in</button>
                <a href={""}>Forgot password</a>
            </form>
        </div>
    );
}

export default App;
