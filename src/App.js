import { useState } from 'react';
import './App.css';
import MoleContainer from './components/moleContainer';

function App() {


  // Player global score
  let [score, setScore] = useState(0);


  const createMoleHill = () => {

    // Create our mole hills. Push 9 total containers to the App.
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
        key={`hill-${i}`}
        setScore={setScore}
        score={score} />
      );
    }

    return (
      <div className='hill'>
        {hills}
      </div>
    )

  }


  return (
    <div className="App">

      {/* Display our score and hills */}
      <h1>Score: {score}</h1>
      {createMoleHill()}

    </div>
  );
}

export default App;
