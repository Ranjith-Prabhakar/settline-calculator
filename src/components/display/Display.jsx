import { useEffect, useRef } from "react"
import { useUseContext } from "../../App"
import { handleResult } from "../../utils/handleResult"

const Display = () => {
const {value,setValue,resultRef} = useUseContext()  
const inputRef = useRef()


useEffect(()=>{inputRef.current.focus()},[resultRef.current.operator,resultRef.current.result,value])


const handleKeyDown = (e) => {
  console.log("handleKeyDown",e.key);
  console.log("value",value)
  if(e.key === 'Enter'){
   handleResult(resultRef,setValue,value)
  }else if(e.key === "+"){
    if(resultRef.current.result === 0){
      resultRef.current.result = parseInt(value);
  }
  resultRef.current.operator = "+"
  setValue("")
  }else if(e.key === "-"){
    if(resultRef.current.result === 0){
      resultRef.current.result = parseInt(value);
  }
  resultRef.current.operator = "-"
  setValue("")
  }else if(e.key === "*"){
    if(resultRef.current.result === 0){
      resultRef.current.result = parseInt(value);
  }
  resultRef.current.operator = "*"
  setValue("")
  }else if(e.key === "/"){
    if(resultRef.current.result === 0){
      resultRef.current.result = parseInt(value);
  }
  resultRef.current.operator = "/"
  }else if(e.key === "Backspace"){
    console.log("value Backspace" ,value)
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
  
  // prevent printing Characters but backspace and enter
  if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Enter') {
    e.preventDefault();
  }
};

const handleOnChange = (e) => {
  const inputValue = e.target.value;
  console.log("inputValue", inputValue);

  if (/^\d*$/.test(inputValue)) {
    setValue(inputValue);
  }
};

  return (
    <div className='w-full'>
        <input ref={inputRef} className='w-full h-20 bg-gray-700 rounded-lg p-5 text-2xl text-white focus:outline-none'   type="text" value={value} onChange={handleOnChange} onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default Display

// const handleOnChange = (e)=>{
//   let operators = ["+","-"]
//   if(operators.includes(e.key)){
//     // 
//   setValue(prev=>prev)
  
//   }else{
//     setValue(e.target.value)
//   }

// }