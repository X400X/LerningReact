import {useState} from 'react';


function Counter(){

    const [counter, setCounter] = useState(0);

    const addCount = () => {
        setCounter(counter +1);
    } 
    const subCount = () => {
        setCounter(counter -1);
    } 
    const zeroCount = () => {
        setCounter(0);
    } 

    return (
        <>
            <div className="counter-container">
                <h1>Counter</h1>
                <p className="counter-display">{counter}</p>
                <div className="counter-button">
                    <button  onClick={subCount}>-</button>
                    <button  onClick={zeroCount}>0</button>
                    <button  onClick={addCount}>+</button>

                </div>
            </div>
        </>
    );
}

export default Counter;