import React, {setState, useState} from 'react';
import './Buttons.css'

const Button = (props) => {
    const [counting, setCount] = useState (0);

    const pause = () => {
       setCount(counting);
    };
    const increment = () => {
        setCount(counting + 1)
    };

    const reset = () => {
        setCount(0);
    };

 return (
    <div >
        <p>Count</p>
        <h1>{counting}</h1>
        <div className="pushBtn">
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Start</button>
            <button onClick={pause}> Pause</button>
        </div>
    </div>
 )
}

export default Button;
