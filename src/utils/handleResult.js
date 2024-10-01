export const handleResult = (resultRef,setValue,value)=>{
    if ( resultRef.current.operator === "+") {
         setValue(resultRef.current.result += parseInt(value))
        resultRef.current.operator = ""
     } else if ( resultRef.current.operator === "-") {
         setValue(resultRef.current.result -= parseInt(value))
         resultRef.current.operator = ""
     } else if ( resultRef.current.operator === "*") {
         setValue(resultRef.current.result *= parseInt(value))
         resultRef.current.operator = ""
     } else if ( resultRef.current.operator === "/") {
         setValue(resultRef.current.result /= parseInt(value))
        resultRef.current.operator = ""
     } 
 }