import { useState } from "react"

const useMyHook = (defaultValue) =>{
    const [value,setValue] = useState(defaultValue);
    const handeOnChange =(e)=>{
        setValue(e.target.value);
    }
    return[value,handeOnChange]
}
export default useMyHook