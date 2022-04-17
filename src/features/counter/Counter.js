import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

const Counter = () => {

    const count = useSelector((state)=> state.counter.count);
    const status = useSelector((state)=> state.counter.status);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);

    const [ display, setDisplay] = useState("block");
    

    const addedValue = Number(amount) || 0; //! we are checking whether the value is a number or not. If it's not, set increment to 0.
  return (
    <div className="counter">
        
    <p>{count}</p>
    <b style={{display: `${display}`}}>{status}</b> <br/>
    <button  onClick={()=>{ dispatch(increment()); 
    setTimeout(() => {
          display === 'none'? setDisplay("block"): setDisplay("none")
        }, 1000)}}>+</button>
    <button onClick={()=> {dispatch(decrement());
    setTimeout(() => {
          display === 'none'? setDisplay("block"): setDisplay("none")
        }, 1000) }}>-</button>
    <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} />
    <button onClick={()=> dispatch(incrementByAmount(addedValue))}>Add Amount</button>
    </div>
  )
}

export default Counter