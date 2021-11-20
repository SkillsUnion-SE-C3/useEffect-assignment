import "./App.css";
import { useState } from "react";

/*
  This is a countdown app. The user can enter a number and start the countdown.

  Problem: The countdown seconds will go to negative value.
  Task: Solve the problem by using `useEffect` hook to stop counting when noOfSeconds is 0.
  
  setInterval documentation: https://www.w3schools.com/jsref/met_win_setinterval.asp
*/
function App() {
  const [noOfSeconds, setNoOfSeconds] = useState(0); // countdown seconds state
  const [intervalId, setIntervalId] = useState(null); // Task 2: Modify this code

  // Task 1: Add code here

  // Called when textfield has onChange event
  function handleChange(e) {
    setNoOfSeconds(parseInt(e.target.value));
  }

  // Called when "Start Countdown" button is clicked
  function startCountdown() {
    if (intervalId === null) {
      const interval = window.setInterval(() => {
        setNoOfSeconds((s) => s - 1);
      }, 1000); // starts interval 
      console.log(interval)
      setIntervalId(interval)
    }
  }

  return (
    <>
      <h2>Countdown Timer (By Seconds)</h2>
      <input type="number" placeholder="E.g. 3" onChange={handleChange} />
      <button onClick={startCountdown}>Start Countdown</button>
      <div>{noOfSeconds} of seconds left.</div>
    </>
  );
}

export default App;
