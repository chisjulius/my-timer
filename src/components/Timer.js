import React, { useState, useEffect} from 'react'

function Timer({timerName}) {
    const [seconds, setSeconds] = useState("60")
    const [isCountRunning, setIsCountRunning] = useState(false)
    const [shouldAlert, setShouldAlert] = useState(false)

    useEffect(() => {
        const secondsLeft = parseInt(seconds)
        if (isCountRunning && secondsLeft > 0){
            setTimeout(() =>{
                setSeconds(secondsLeft - 1)
            },1000)
        }
        else{
            if(shouldAlert){
                setShouldAlert(false)
                alert(`The ${timerName} countdown is over`)
            }
            setIsCountRunning(false)
        }
    },[seconds, isCountRunning, shouldAlert, timerName])


    return (
        <div className="col s12 l6">
            <h5 className="timerName">This is a {timerName} timer</h5>
            <input  disabled={isCountRunning} type="number" value={seconds} onChange={(e) => {setSeconds(e.target.value)}} />
            <button className="btn-small blue" onClick={() =>{setIsCountRunning(true)
            setShouldAlert(true)}} >
                Start timer
            </button>
        </div>
    )
}

export default Timer