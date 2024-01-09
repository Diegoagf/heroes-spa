import { useState } from "react"

export const useForm = (initialForm) => {
  
    const [formState, setformState] = useState(initialForm)
      
      const OnInputChange=({target})=>{
        const{name,value} = target
    
        setformState({
          ...formState,
          [name]:value
        })
      }

      const OnResetForm=()=>{
        setformState(initialForm);
      }
    
  
    return{
        ...formState,
        formState,
        OnInputChange,
        OnResetForm
    };
}