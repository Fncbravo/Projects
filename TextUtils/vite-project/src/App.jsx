import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'
// import React, { useState } from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light') // Whether dakr mode is enalbed or not
  const [alert, setAlert] = useState(null)

  // a function which will help to show alert msg
  const showAlert = (message,type) => {
    setAlert({
       msg: message,
       type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
 }
   

  const toggleMode =()=> {
    if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#040101';
    showAlert("Dark mode has been enabled", "success");
  } 
    else {
     setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    }
  }
 // router setup:

//  const router = createBrowserRouter([
//   {
//     path: "/about",
//     element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/><About /></>
//   },
//   {
//     path: "/textform",
//     element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/><TextForm /></>
//   }
//  ])


  return (
    <>
     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
     {/* <RouterProvider router={router} />? */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <TextForm showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>
     <About aboutText="hello" mode={mode}/>
     </div> 
    </>
);
}


export default App
