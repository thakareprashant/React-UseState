import React from "react";
import "./style.css";
import React ,{useState}from "react";

export default function App() {

  let [test,setTest] = useState(0)
  function increment(){

    setTest(test+1);
    console.log("hiii");
  }
  function decrement(){

    if(test !=0){
      setTest(test-1);
    }
    
    console.log("hiii");
  }
  function reset(){

    setTest(0);

  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{test}test</div>
      <button onClick={decrement}> -</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}





  