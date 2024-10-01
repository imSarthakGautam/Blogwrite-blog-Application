import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login , logout} from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  // console.log(process.env.REACT_APP_APPWRITE_URL); --create react app
  // console.log(import.meta.env.VITE_APPWRITE_URL); -- Vite

 // tracking if app is stil Loading data, initially true.
 const [loading, setLoading] = useState(true)
 const dispatch = useDispatch()

 //runs after compoments mounts 
 useEffect(() => {

  //checks if there is a logged-in user
  authService.getCurrentUser()
  .then((userData)=>{

    if (userData){
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .finally( ()=> setLoading(false))
  
 }, [])

  
  return !loading ? (
   <>
   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
          TODO : <Outlet/>
          {/* outlet: from react router dom */}
        </main>
        <Footer/>
      </div>
   </div>
   </>
  ) : null 
}

export default App
