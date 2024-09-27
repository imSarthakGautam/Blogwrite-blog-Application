import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

 function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = ()=>{

        authService.logout().then(()=>{
            dispatch(logout())
        })

    }
    

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn

//additional note:
/* Two types of Logouts here

1. authService.logout() --> Logout from the Backend/Service 

This method likely communicates with the backend authentication service (Appwrite) to log the user out from the server.
It typically clears the user's session, invalidates tokens (e.g., JWT or session tokens), and removes any server-side authentication data.
When executed: This ensures that the user's authentication state is cleared on the backend,
preventing them from making further authenticated requests until they log in again.


2. dispatch(logout()) --> Logout in Redux/Frontend State

What it does: This action updates the local (frontend) state managed by Redux.
It will modify the state related to authentication, such as setting status to false and clearing userData, marking the user as logged out in the UI.
When executed: This ensures that the frontend correctly reflects that the user is logged out. 
For example, it might hide certain UI elements like the "Logout" button or restrict access to specific routes that require authentication.

*/