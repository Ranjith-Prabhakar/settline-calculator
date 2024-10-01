import { useUseContext } from '../../App';

const Operators = ({ OperatorValue }) => {
    const { value, setValue, resultRef } = useUseContext();
    
    const handleOperation = () => {
        if (OperatorValue === "+") {
            if(resultRef.current.result === 0){
                resultRef.current.result = parseInt(value);
            }
            resultRef.current.operator = "+"
            setValue("")
        } else if (OperatorValue === "-") {
            if(resultRef.current.result === 0){
            resultRef.current.result = parseInt(value);
            }
            resultRef.current.operator = "-"
            setValue("")
        } else if (OperatorValue === "*") {
            if(resultRef.current.result === 0){
            resultRef.current.result = parseInt(value);
            }
            resultRef.current.operator = "*"
            setValue("")
        } else if (OperatorValue === "/") {
            if(resultRef.current.result === 0){
            resultRef.current.result = parseInt(value);
            }
            resultRef.current.operator = "/"
            setValue("")
        } 
    };

    const handleResult = ()=>{
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

    return (
    
        <div  className={`p-5 border cursor-pointer active:bg-white min-w-[90px] text-center`} onClick={OperatorValue === '=' ? handleResult:handleOperation}>
            <h1 className='font-bold text-4xl text-gray-400'>{OperatorValue}</h1>
        </div>
        
        
        
    );
};

export default Operators;

