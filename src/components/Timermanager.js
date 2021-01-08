import React, { useState } from 'react'
import Timer from './Timer'



function Timermanager() {
    const [timerNames, setTimerNames] = useState(
        ["School", "Football", "Meditation"]
    )
    const [name, setName] = useState("")
    return (
        <div className="row timemanager">
            <form
            onSubmit = {(e) => {
                e.preventDefault();
                const newTimer =[...timerNames]
                newTimer.push(name)
                setTimerNames(newTimer)
                setName("")
                
                
            }}
            >
                <div className="col s10 offset-s1">
                    <input type="text" onChange={(e) =>{setName(e.target.value)}} value={name} />
                    <button className="btn blue darken-3">Add Timer</button>
                </div>
                
            </form>
            {timerNames.map(timerName => (
                <Timer timerName={timerName}/>
            ))}
        </div>
    )
}

export default Timermanager