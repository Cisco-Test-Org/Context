import { useState } from 'react';
import './App.css';

function App() {

  const [fact, setFact] = useState('Owning a cat can actually reduce your chances of having a heart attack by 40%')

  const getNewFact = async () => {
    const respose = await fetch('https://catfact.ninja/fact')
    const data = await respose.json()
    setFact(data.fact)
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="mt-5">🙀</h1>
        <h1 className="header mt-2">Random Cat Facts</h1>
        <h2 className="text-primary mt-5">{fact}</h2>
        <button onClick={getNewFact} type="button" className="btn btn-danger mt-2">New Fact</button>
      </div>
    </div>
  );
}

export default App;
