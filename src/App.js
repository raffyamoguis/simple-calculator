import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const handleSum = async () => {
      if (isNaN(num1) || isNaN(num2)) {
        return;
      }
      setSum(num1 + num2)
    }
    handleSum();
  }, [num1, num2]);

  const resetInputs = () => {
    setNum1(0);
    setNum2(0);
  }

  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='num-input'>
          <label>Enter number 1:</label>
          <input type="number" onChange={(e) => setNum1(parseInt(e.target.value))} value={num1} />
        </div>
        <div className='num-input'>
          <label>Enter number 2:</label>
          <input type="number" onChange={(e) => setNum2(parseInt(e.target.value))} value={num2} />
        </div>
        <div className='result'>Result: {sum}</div>
        <button style={{ marginTop: '10px' }} onClick={resetInputs}>Reset</button>
      </div>
    </div>
  );
}

export default App;
