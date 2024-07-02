import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setButtonDisabled(count === 0);
    }, [count]);

    function decrementCount() {
        setCount(prevCount => prevCount - 1);
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <button disabled={buttonDisabled} onClick={decrementCount}>-</button>&nbsp;
            <span>{count}</span>&nbsp;
            <button onClick={incrementCount}>+</button>
        </div>
    );
}
