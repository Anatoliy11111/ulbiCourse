import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count + 1)
    }
    console.log(count)
    return (
        <div>
          <button className={classes.btn} onClick={increment}>increment</button>
        </div>
    );
};