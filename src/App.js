import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {

  const [output, setOutput] = useState(0)
  const [input, setInput] = useState(0)

  const handlingEvent = (value) => {
    switch(value){
      case 'Clear' : setInput(0)
                     setOutput(0)
                      break
      
      case 'AC' :   input !== 0 && input.length !== 1 ? setInput(input.slice(0,input.length - 1)) : setInput(0)
                    break
            
      case '=' :  try{
                  setOutput(eval(input))
                  setInput(0)
                  }catch(e) {
                    setOutput(e.message)
                  }
                  break
            
      default : input !== 0 ? setInput(input+value) : setInput(value)
    }
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center my-12">React Calculator</h2>

      <div className="mx-auto flex justify-center items-center flex-col">
          <Output output={output} />
          <Input input={input} />
          <Buttons handlingEvent={handlingEvent} />
      </div>
    </div>
  );
}

export default App;
