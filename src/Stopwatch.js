import React from 'react';
function Stopwatch({timerTime, clickHandler, timerBool, resetHandler}){
    return(<>
        <h2>{Math.floor(timerTime/3600)} hours</h2>
        <h3>{Math.floor(timerTime/60)%60} minutes</h3>
        <h4>{timerTime%60} seconds</h4>
        <button onClick={clickHandler}>{timerBool? `Stop` : `Start`}</button>
        <button onClick={resetHandler}>Reset</button>
    </>);
}
export default Stopwatch;