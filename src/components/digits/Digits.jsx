import React from 'react'
import { useUseContext } from '../../App'

const Digits = ({digitValue}) => {
    const {setValue}=useUseContext()  
  return (
    <div className='p-5 border active:bg-white min-w-[90px] text-center' onClick={()=>setValue(prev=>parseInt(''+prev+digitValue))}>
        <h1 className='font-bold text-4xl text-gray-400 cursor-pointer' >{digitValue}</h1>
    </div>
  )
}

export default Digits