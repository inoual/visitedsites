import React, { useState } from 'react'

const users = () => {
    
    const [users, setUsers] = useState([])

    const handleText = e => {
        const text = e.target.value
        
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input type ='text' onChange={handleText}></input>
            </form>
            
        </div>
    )
}

export default users
