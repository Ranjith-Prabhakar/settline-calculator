import React from 'react'
import Digits from './Digits'
import Operators from '../operators/Operators'
import ClearOne from '../clear/ClearOne'
import ClearAll from '../clear/ClearAll'

const DigitsContainer = () => {



  return (
    <div className='my-4 h-full flex-col space-y-2'>

        <div className='flex justify-between border-yellow-500'  >
        <Digits digitValue={1}/>
        <Digits digitValue={2}/>
        <Digits digitValue={3}/>
        <Operators OperatorValue="+"/>
        </div>

        <div className='flex justify-between border-yellow-500' >
        <Digits digitValue={4}/>
        <Digits digitValue={5}/>
        <Digits digitValue={6}/>
        <Operators OperatorValue="-"/>
        </div>

        <div className='flex justify-between border-yellow-500' >
        <Digits digitValue={7}/>
        <Digits digitValue={8}/>
        <Digits digitValue={9}/>
        <Operators OperatorValue="*"/>
        </div>

        <div className='flex justify-between border-yellow-500' >
        <Digits digitValue={0}/>
        <Digits digitValue={"."}/>
        <Operators OperatorValue="="/>
        <Operators OperatorValue="/"/>
        </div>

        <div className="flex">
       <ClearOne />
       <ClearAll />
        </div>

    </div>
  )
}

export default DigitsContainer