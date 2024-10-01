import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import Display from './components/display/Display'
import DigitsContainer from './components/digits/DigitsContainer'

const ContextProvider = createContext()
export const useUseContext = ()=>useContext(ContextProvider)

const App = () => {
  const [value,setValue] = useState(0)
  const resultRef = useRef({result:0,operator:""})
  
  return (
   
       <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black" >
        <div className="w-1/4 border border-white h-auto rounded-md p-5" >
        <ContextProvider.Provider value={{value,setValue,resultRef}}>
        <Display/>
        <DigitsContainer />
        </ContextProvider.Provider>
        </div>
    </div>
  
  )
}

export default App