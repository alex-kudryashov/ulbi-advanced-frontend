import React, {useState} from 'react';
import styles from './Counter.module.scss'

interface CounterPropsInterface {
    initial: number
}

const Counter = ({initial}: CounterPropsInterface) => {
    const [value, setValue] = useState(initial)

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => setValue(value - 1)} type='button'>-</button>
            <div>{value}</div>
            <button className={styles.button} onClick={() => setValue(value + 1)} type='button'>+</button>
        </div>
    );
};

export default Counter;