import React, { useState } from 'react'
import useTitleCount from './useTitleCount'

const Test = () => {
    const [count, setCount] = useState(0)
    useTitleCount(count);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={
                () => setCount(count + 1)
            }> Click</button>
        </div>
    )
}

export default Test