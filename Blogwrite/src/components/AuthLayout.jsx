// Creating a protected route component that ensures certain parts of the application (child components) are only accessible based on the user’s authentication status. 
//If the authentication status does not match the required condition, the user is redirected to a different route (/login or /).

import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication= true}) {

    const navigate= useNavigate()
    const [loader, setLoader] = useState(true)
    // check in store : userLogin
    const authStatus= useSelector(state => state.auth.status)


    useEffect(() => {

          // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        if (authentication && authStatus !== authentication) {
            console.log("Sucessful authentication")
            navigate('/login') // if not authenticated, redirect to login
            
        } else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
          setLoader(false)
        
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>

}
