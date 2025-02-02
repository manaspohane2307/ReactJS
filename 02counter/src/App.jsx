import { useState } from 'react' //imported from react to manage state of counter
//we have used useState hook which is used to add state in functional component
import './App.css' //importing css

function App() { //functional component which returns JSX(UI of application)
  
  //This is useState hook
  const [counter, setCounter] = useState(15) //1st value is variable and 2nd value is function.
  //state variable has default value of 15
  //counter holds current value of counter
  //setCounter function updates value of counter.

  //Direct Update - state overwriting
  const addValue = () => {
    setCounter(counter + 1);
  }

  //Functional updates - each update happens sequentially thus value gets incremented by 4
  const addValue2 = () => { 
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const addValue3 = () => {
    //multiple setCounter(counter + 1) calls are made in a row, React batches the updates and only applies the last one.
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  const removevalue = () => {
    setCounter(counter-1)
  }

  return ( //we are returning JSX which will be rendered in browser. <></> is a react fragment used to group multiple elements
    <> 
      <h1>React couter by Manas</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removevalue}>Remove Value</button>
      <p>footer : {counter} </p>

    </>
  )
}

export default App //this allows App component to be imported and used in main.jsx 
