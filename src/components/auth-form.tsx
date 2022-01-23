import React from "react";
import useInput from "../hooks/useInput";

const AuthForm = () => {

    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: false})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 20})

    return (
        <form className={"auth-form"}>
            {(email.isDirty && email.isEmpty) && <div className={"error"}>Can't be empty!</div>}
            {(email.isDirty && email.emailError) && <div className={"error"}>Wrong email!</div>}
            <input onBlur={email.onBlur}
                   onChange={email.onChange}
                   value={email.value}
                   name={"email"}
                   type={"text"}
                   placeholder={"enter your email"}/>
            {(password.isDirty && password.minLengthError) && <div className={"error"}>The password must be from 5 to 20 characters</div>}
            {(password.isDirty && password.isEmpty) && <div className={"error"}>Can't be empty!</div>}
            <input onBlur={password.onBlur}
                   onChange={password.onChange}
                   value={password.value}
                   name={"password"}
                   type={"password"}
                   placeholder={"enter your password"}/>
            <button disabled={!email.inputValid || !password.inputValid} type={"submit"}>Sign in</button>
            <a href={""}>Forgot password</a>
        </form>)
}

export default AuthForm