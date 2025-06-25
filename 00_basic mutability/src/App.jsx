// App.jsx
import { useState } from "react";

function App1() {
  const [counter, setCounter] = useState({ count: 0 });

  const increment = () => {
    const newCounter = { ...counter, count: counter.count + 1 };
    setCounter(newCounter);
    console.log("Counter after immutable update:", newCounter.count);
  };

  return (
    <div>
      <h3> Immutable: Count = {counter.count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


function App2() {
  const [counter, setCounter] = useState({ count: 0 });

  const increment = () => {
    counter.count += 1; 
    setCounter(counter); 
    console.log("Counter after mutation:", counter.count);
  };

  return (
    <div>
      <h3> Mutated: Count = {counter.count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export { App1, App2 };
