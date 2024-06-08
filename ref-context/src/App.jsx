import { createContext, useState } from 'react'
import './App.css'
import Component1 from './pages/Component1'
import User from './pages/user/User'

export const DataContext = createContext()

function App() {
  
  let [name,setName]=useState("saurabh")

  return (
    <>

    

    <User/>

    {/* <DataContext.Provider value={{name:name,f:setName}}>

        <h1>Welcome {name}</h1>

        

        <Component1  />

    </DataContext.Provider> */}


    </>
  )
}

export default App
