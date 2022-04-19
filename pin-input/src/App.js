import React from 'react';
import './App.css';
import InputBoxes from './Components/InputBoxes';

function App() {

  const [value, setValue] = React.useState("")
  return (
    <>
      <div className="App">

        <InputBoxes length={5} onChange={(val) => setValue(val)} perBox={1} />
      </div>
      <h3>{value}</h3>
    </>
  );
}

export default App;
