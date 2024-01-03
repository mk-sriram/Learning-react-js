import { useState, useEffect} from 'react'; //components current sitatuion , storesd inside the componentn

import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);  // hook 
    useEffect(() =>  {
        setCounter(100) // cannpt say counter = 100; as React States should never be modified directly 
    }, []) // when dependency array -> when empty, code isndie the function only happens at the inital laod of the component 
    // if dependency array has a variable inside, then code runs when the variable gets updated 
    
    //so if the code inside updates the variable then this would cause an infinite loop , not good 


  return (
    <div className="App">
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}> - </button>
        <h1> {counter} </h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}> + </button>
        </div>
  );
}

export default App;
