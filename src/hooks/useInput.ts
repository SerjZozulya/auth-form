import {useState} from "react";
import useValidation from "./useValidation";

const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const valid = useValidation(value, validations)
    const [isDirty, setDirty] = useState(false)

    const onChange = (e:any) => {
        setValue(e.target.value)
    }

    const onBlur = (e:any) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default useInput