import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import useWordGame from './hooks/useWordGame';

function App() {

 const [text,handleChange,inputRef,timeRemaining,startGame,wordsCount]=useWordGame()

  return (

    <div className="App">
     <>
     <h1>How Fast You Can Type 🦥?</h1>
     <textarea ref={inputRef} onChange={handleChange} value={text} disabled={timeRemaining===0?true:false} />
     <h4>Time Remaining : {timeRemaining} s</h4>
     <button disabled={timeRemaining>0?true:false} onClick={startGame}>Start Typing</button>
     <h1>word Counts {wordsCount} </h1>
     
     </>
    </div>
  );
}

export default App;
