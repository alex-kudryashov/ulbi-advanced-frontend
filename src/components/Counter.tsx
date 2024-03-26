import React, {useState} from 'react';
import './Counter.scss'

interface CounterPropsInterface {
    initial: number
}

const Counter = ({initial}: CounterPropsInterface) => {
    const [value, setValue] = useState(initial)

    return (
        <div className='container'>
            <button onClick={() => setValue(value - 1)}>-</button>
            <div>{value}</div>
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
};

export default Counter;