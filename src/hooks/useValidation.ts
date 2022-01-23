import {useEffect, useState} from "react";

const useValidation = (value: string, validations: any) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLength] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
                    break
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'isEmail':
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break
            }
        }

    }, [value])

    useEffect(() => {
        if(isEmpty || maxLengthError || minLengthError || emailError)
            setInputValid(false)

        else setInputValid(true)

    }, [isEmpty, maxLengthError, minLengthError, emailError])

    return {
        isEmpty,
        minLengthError,
        emailError,
        maxLengthError,
        inputValid
    }
}

export default useValidation