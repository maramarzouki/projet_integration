import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (firstName, lastName, email, password, birthDate) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3001/signUp', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, lastName, email, password, birthDate})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok){
            // save the user to local storage
            localStorage.setItem('user')

            //update the auth context
            dispatch({type: 'LOGIN'})

            setIsLoading(false)

        }

    }

    return{signup, isLoading, error}
}