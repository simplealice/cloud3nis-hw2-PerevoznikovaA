import React from 'react'
import { useState } from 'react'
import '../App.css';

function TaskAdd( {addTask} ) {
    const [userInput, setUserInput] = useState('')
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />

            <button>Add</button>
        </form>
    )
}

export default TaskAdd
