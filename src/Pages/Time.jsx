import React from 'react'

export default function Time() {
    return (
        <div>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
}
