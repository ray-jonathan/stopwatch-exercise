import React from 'react';
function Stopwatch({timerTime, clickHandler, timerBool}){
    return(<>
        <h2>{timerTime}</h2>
        <button onClick={clickHandler}>{timerBool? `Stop` : `Start`}</button>
    </>);
}
export default Stopwatch;