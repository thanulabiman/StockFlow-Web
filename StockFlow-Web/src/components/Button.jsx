import React from 'react'

function Button() {
    return (
        <div>
            <button type="button" onClick={() => alert("You have clicked the button")}
                className='border-3 border-solid border-b-fuchsia-900 rounded-md bg-amber-100 text-black px-2 py-1'>Submit</button>
        </div>
    )
}

export default Button
