import React from 'react'
import { useUseContext } from '../../App'

const ClearOne = () => {
    const {value,resultRef,setValue} = useUseContext() 
    const clear = ()=>{
        let digitLength = value
        digitLength = String(digitLength).length
       
        if(digitLength <= 1){
            resultRef.current.result = 0
            setValue(0)
        }else{
            let floorValue = Math.floor(value/10)
            resultRef.current.result = floorValue
            setValue(floorValue)
    
        }
    }
  return (
    <div  className={`p-5 border cursor-pointer w-1/2 active:bg-white`} onClick={clear}>
            <h1 className='font-bold text-4xl text-gray-400'>C</h1>
        </div>
  )
}

export default ClearOne