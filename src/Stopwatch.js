import React from 'react';
function Stopwatch({timerTime, clickHandler, timerBool}){
    let minutes = Math.floor(timerTime/60)%60;

    return(<>
        <h2>{Math.floor(timerTime/3600)} hours</h2>
        <h3>{minutes} minutes</h3>
        <h4>{timerTime%60} seconds</h4>
        <button onClick={clickHandler}>{timerBool? `Stop` : `Start`}</button>
    </>);
}
export default Stopwatch;