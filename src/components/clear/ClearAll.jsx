import React from 'react'
import { useUseContext } from '../../App'

const ClearAll = () => {

const {setValue,resultRef} = useUseContext() 

const clearAll =()=>{
    resultRef.current.result = 0
    setValue(0)
}
  return (
    <div  className={`p-5 border cursor-pointer w-1/2 active:bg-white`} onClick={clearAll}>
            <h1 className='font-bold text-4xl text-gray-400'>CE</h1>
        </div>
  )
}

export default ClearAll