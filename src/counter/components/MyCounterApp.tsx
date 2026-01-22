import React from 'react'
import { useCounter } from './hooks/useCounter'

export const MyCounterApp = () => {

    const { count, handleAdd, handleSubtract, handleReset } = useCounter();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>MyCounterApp</h2>
            <span>Counter: {count}</span>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
