import React from 'react'

export const useCounter = (initialNumber: number = 4) => {

    const [count, setCount] = React.useState(initialNumber);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(initialNumber);
    }


    return {

        count,
        handleAdd,
        handleSubtract,
        handleReset

    }

}
