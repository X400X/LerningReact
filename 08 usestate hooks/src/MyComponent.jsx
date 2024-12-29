import React, {useState} from 'react';

function MyComponent() {

    const [name,setName] = useState ("No-Body");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Konsta");
    }
    const addAge = () => {
        setAge(age + 1);
    }
    const subAge = () => {
        setAge(age-1);
    }
    const zeroAge = () => {
        setAge(0);
    }
    const toggleEmployed = () =>{
        setIsEmployed(!isEmployed);
    }
    return (
        <>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>
            <div>
                <p>{age}</p>
                <button onClick={addAge}>+age</button>
                <button onClick={zeroAge}>0 age</button>
                <button onClick={subAge}>-age</button>
            </div>
            <div>
                <p>Is employed: {isEmployed?" Yes":" No"}</p>
                <button onClick={toggleEmployed}>Toggle Status</button>
            </div>
        </>
    );
}

export default MyComponent