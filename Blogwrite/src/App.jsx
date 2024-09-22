import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // console.log(process.env.REACT_APP_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  return (
   <>
   <div>Hello</div>
   </>
  )
}

export default App
