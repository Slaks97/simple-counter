import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <button onClick={() => {
        if (counter > 0) {
          setCounter(counter - 1)
        }
      }}>-</button>
      <h1>{counter}</h1>
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}
      <button onClick={() => {
        if (counter < 100) {
          setCounter(prevCounter => prevCounter + 1)
        } else if (counter === 100) {
          alert('You have reached the maximum allowed!');
        }
      }
      }>+</button>
    </div>
  );
}

export default App;