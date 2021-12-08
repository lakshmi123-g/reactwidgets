import React, { useState } from 'react';

function Counter() {
    const [Count, setCount] = useState(0)
    // console.log(Count);
    return (
        <div className="App">
            <h1>{Count}</h1>
            <button onClick={() => setCount(Count + 1)}>ADD</button>

            <button onClick={() => setCount(Count - 1)}>SUB</button>
        </div>
    );
}

export default Counter;
