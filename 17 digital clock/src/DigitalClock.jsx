import {useState, useEffect} from 'react';


function DigitalClock (){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(handleTime, 1000);

        return (() =>{
            clearInterval(intervalId);
        });
    },[])

    function handleTime(){
        setTime(new Date());
    }

    function formatTime(){
        let hours = time.getHours();
        let mins = time.getMinutes();
        let sec = time.getSeconds();
        const meridium = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(sec)} ${meridium}`;
    }

    function padZero(number){
        return (number < 10 ? "0": "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>

            </div>

        </div>
    );
}

export default DigitalClock;